import pygame as pg
from random import randint, uniform
from os.path import join
from pygame import mixer

# Constants
SCREEN_WIDTH, SCREEN_HEIGHT = 1280, 720
METEOR_SPAWN_TIME = 300 

class Player(pg.sprite.Sprite):
    def __init__(self, groups):
        super().__init__(groups)
        self.image = pg.image.load(join("Spaceship", "images", "ship.png")).convert_alpha()
        self.rect = self.image.get_frect(center=(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2))
        self.direction = pg.math.Vector2()
        self.speed = 300

        # Cooldown
        self.can_shoot = True
        self.laser_shoot_time = 0
        self.cooldown_duration = 400

    def laser_timer(self):
        if not self.can_shoot:
            current_time = pg.time.get_ticks()
            if current_time - self.laser_shoot_time >= self.cooldown_duration:
                self.can_shoot = True

    def update(self, dt):
        keys = pg.key.get_pressed()
        self.direction.x = int(keys[pg.K_d]) - int(keys[pg.K_a])
        self.direction.y = int(keys[pg.K_s]) - int(keys[pg.K_w])
        self.direction = self.direction.normalize() if self.direction else self.direction
        
        self.rect.center += self.direction * self.speed * dt

        if self.rect.centerx >= SCREEN_WIDTH: self.rect.centerx = SCREEN_WIDTH
        if self.rect.centerx <= 0: self.rect.centerx = 0
        if self.rect.centery >= SCREEN_HEIGHT: self.rect.centery = SCREEN_HEIGHT
        if self.rect.centery <= 0: self.rect.centery = 0
    
        recent_keys = pg.key.get_just_pressed()
        if recent_keys[pg.K_SPACE] and self.can_shoot:
            Laser(laser_surf, self.rect.midtop, (all_sprites, laser_sprites))
            pg.mixer.Sound(join("Spaceship", "audio", "space_shooter_audio_laser.wav")).play()
            self.can_shoot = False
            self.laser_shoot_time = pg.time.get_ticks()

        self.laser_timer()


class Star(pg.sprite.Sprite):
    def __init__(self, groups, surf):
        super().__init__(groups)
        self.image = surf
        self.rect = self.image.get_frect(center=(randint(0, SCREEN_WIDTH), randint(0, SCREEN_HEIGHT)))


class Laser(pg.sprite.Sprite):
    def __init__(self, surf, pos, *groups):
        super().__init__(groups)
        self.image = surf
        self.rect = self.image.get_frect(midbottom=pos)

    def update(self, dt):
        self.rect.centery -= 400 * dt
        if self.rect.bottom < 0:
            self.kill()


class Meteor(pg.sprite.Sprite):
    def __init__(self, surf, pos, *groups):
        super().__init__(groups)
        self.image = surf
        self.rect = self.image.get_frect(center=pos)
        self.start_time = pg.time.get_ticks()
        self.lifetime = 3000
        self.direction = pg.Vector2(uniform(-0.5, 0.5), 1)
        self.speed = randint(400, 500)

    def update(self, dt):
        self.rect.center += self.direction * self.speed * dt
        if pg.time.get_ticks() - self.start_time >= self.lifetime:
            self.kill()


def collisions():      
    global run, score
    collision_sprites = pg.sprite.spritecollide(player, meteor_sprites, True)
    if collision_sprites:
        for sprite in meteor_sprites:
            sprite.kill()
        menu()

    for laser in laser_sprites:
        collided_sprites = pg.sprite.spritecollide(laser, meteor_sprites, True)
        if collided_sprites:
            laser.kill()
            score += 1


run = True
difficulty = None 

def menu():
    global run, score

    title_font = pg.font.Font(None, 100)
    button_font = pg.font.Font(None, 50)
    text_gray = (200, 200, 200)

    play_button = pg.Rect(SCREEN_WIDTH // 2 - 100, SCREEN_HEIGHT // 2 - 50, 200, 50)
    quit_button = pg.Rect(SCREEN_WIDTH // 2 - 100, SCREEN_HEIGHT // 2 + 20, 200, 50)

    menu_running = True
    while menu_running:
        if not run:
            return

        screen.fill("#3a2e3f")

        title_surface = title_font.render("Spaceship", True, (200, 200, 200))
        title_rect = title_surface.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 4))
        screen.blit(title_surface, title_rect)

        pg.draw.rect(screen, (0, 0, 255), play_button)
        pg.draw.rect(screen, (255, 0, 0), quit_button)

        play_text = button_font.render("Play", True, white)
        quit_text = button_font.render("Quit", True, white)
        score_surface = Game_font.render(f"Score: {score}", True, text_gray)

        screen.blit(play_text, play_text.get_rect(center=play_button.center))
        screen.blit(quit_text, quit_text.get_rect(center=quit_button.center))
        screen.blit(score_surface, (10, 10))

        for event in pg.event.get():
            if event.type == pg.QUIT:
                run = False 
                menu_running = False 
            if event.type == pg.MOUSEBUTTONDOWN and event.button == 1:
                if play_button.collidepoint(event.pos):
                    score = 0
                    difficulty_menu()
                    return
                if quit_button.collidepoint(event.pos):
                    run = False  
                    menu_running = False

        pg.display.update()
        clock.tick(60)
    pg.quit()


def difficulty_menu():
    global run, meteor_spawn_time, difficulty  

    pg.event.clear()
    clock = pg.time.Clock()

    title_font = pg.font.Font(None, 100)
    button_font = pg.font.Font(None, 50)

    easy_button = pg.Rect(SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT // 2 - 110, 300, 70)
    medium_button = pg.Rect(SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT // 2 - 30, 300, 70)
    hard_button = pg.Rect(SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT // 2 + 50, 300, 70)

    difficulty_running = True
    while difficulty_running:
        if not run:
            return

        screen.fill("#3a2e3f")
        difficulty_title_surf = title_font.render("Select difficulty", True, (200, 200, 200))
        difficulty_title_rect = difficulty_title_surf.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 4))
        screen.blit(difficulty_title_surf, difficulty_title_rect)

        pg.draw.rect(screen, green, easy_button)
        pg.draw.rect(screen, blue, medium_button)
        pg.draw.rect(screen, red, hard_button)

        easy_text = button_font.render("Easy", True, white)
        medium_text = button_font.render("Medium", True, white)
        hard_text = button_font.render("Hard", True, white)

        screen.blit(easy_text, easy_text.get_rect(center=easy_button.center))
        screen.blit(medium_text, medium_text.get_rect(center=medium_button.center))
        screen.blit(hard_text, hard_text.get_rect(center=hard_button.center))

        for event in pg.event.get():
            if event.type == pg.QUIT:
                run = False
                difficulty_running = False
            if event.type == pg.MOUSEBUTTONDOWN and event.button == 1:
                if easy_button.collidepoint(event.pos):
                    meteor_spawn_time = 400
                    difficulty = "easy"
                elif medium_button.collidepoint(event.pos):
                    meteor_spawn_time = 250
                    difficulty = "medium"
                elif hard_button.collidepoint(event.pos):
                    meteor_spawn_time = 120
                    difficulty = "hard"

                pg.time.set_timer(meteor_event, meteor_spawn_time)
                return
            
        pg.display.update()
        clock.tick(60)
    pg.quit()


# Setup Pygame
pg.init()
mixer.init() 
volume = 0.4
mixer.music.set_volume(volume)
 
screen = pg.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pg.display.set_caption("Spaceship")
clock = pg.time.Clock()
Game_font = pg.font.Font(None, 40)
score = 0

# Colors
white = (255, 255, 255)
red = (255, 0, 0)
green = (0, 230, 0)
blue = (0, 0, 255)

# Load images
star_surf   = pg.image.load(join("Spaceship", "images", "star.png")).convert_alpha()
meteor_surf = pg.image.load(join("Spaceship", "images", "meteor.png")).convert_alpha()
laser_surf  = pg.image.load(join("Spaceship", "images", "laser.png")).convert_alpha()

# Load audio
mixer.music.load(join("Spaceship", "audio", "space_shooter_audio_laser.wav"))

# Sprites
all_sprites = pg.sprite.Group()
meteor_sprites = pg.sprite.Group()
laser_sprites = pg.sprite.Group()
for i in range(20):
    Star(all_sprites, star_surf)
player = Player(all_sprites)

# Meteor event
meteor_event = pg.event.custom_type()  
pg.time.set_timer(meteor_event, METEOR_SPAWN_TIME)

menu()
difficulty_menu()

# Main game loop
run = True
while run:
    dt = clock.tick() / 1000  

    for event in pg.event.get():
        if event.type == pg.QUIT:
            run = False
        if event.type == meteor_event:
            x, y = randint(0, SCREEN_WIDTH), randint(-200, -100)
            Meteor(meteor_surf, (x, y), all_sprites, meteor_sprites)

    all_sprites.update(dt)
    collisions()

    screen.fill("#3a2e3f")
    all_sprites.draw(screen)
    
    text_surface = Game_font.render(f"Score: {score}", True, (200, 200, 200))
    screen.blit(text_surface, (10, 10))
    
    pg.display.update()

pg.quit()
