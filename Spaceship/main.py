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

        # Highscores
        self.load_highscores()

    def load_highscores(self):
        self.easy_highscore = 0
        self.medium_highscore = 0
        self.hard_highscore = 0
        self.impossible_highscore = 0

        highscore_files = {
            "easy": "easy.highscore.txt",
            "medium": "medium.highscore.txt",
            "hard": "hard.highscore.txt",
            "impossible": "impossible.highscore.txt"
        }

        for difficulty, filename in highscore_files.items():
            try:
                with open(filename, "r") as file:
                    score = int(file.read())
                    setattr(self, f"{difficulty}_highscore", score)
            except FileNotFoundError:
                continue

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

        if player.rect.centerx >= SCREEN_WIDTH:
            player.rect.centerx = SCREEN_WIDTH
        if player.rect.centerx <= 0:
            player.rect.centerx = 0
        if player.rect.centery >= SCREEN_HEIGHT:
            player.rect.centery = SCREEN_HEIGHT
        if player.rect.centery <= 0:
            player.rect.centery = 0
    
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
class Audio(pg.sprite.Sprite):
    def __init__(self, surf, pos, *groups):
        super().__init__(groups)
        self.image = surf
        self.rect = self.image.get_frect(center=pos)
        self.sound = True


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
    global run
    collision_sprites = pg.sprite.spritecollide(player, meteor_sprites, True)
    if collision_sprites:
        for sprite in meteor_sprites:
            sprite.kill()
        menu()

    for laser in laser_sprites:
        collided_sprites = pg.sprite.spritecollide(laser, meteor_sprites, True)
        if collided_sprites:
            laser.kill()
            global score
            score += 1

run = True
difficulty = None 

def menu():
    global run
    global sound
    sound = True
    # Fonts
    global title_font
    global button_font
    title_font = pg.font.Font(None, 100)
    button_font = pg.font.Font(None, 50)
    text_gray = (200, 200, 200)

    # Button settings
    play_button = pg.Rect(SCREEN_WIDTH // 2 - 100, SCREEN_HEIGHT // 2 - 50, 200, 50)
    quit_button = pg.Rect(SCREEN_WIDTH // 2 - 100, SCREEN_HEIGHT // 2 + 20, 200, 50)
    achivements_button = pg.Rect(SCREEN_WIDTH - 270, 20, 245, 50)

    global score
    menu_running = True
    while menu_running:
 
        if not run:
            return

        screen.fill("#3a2e3f")

        # Title
        ship = player.image
        title_surface = title_font.render("Spaceship", True, (200, 200, 200))
        title_rect = title_surface.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 4))
        screen.blit(title_surface, title_rect)
        screen.blit(ship, (SCREEN_WIDTH/ 2 - 53, SCREEN_HEIGHT - 200))


        # Buttons
        pg.draw.rect(screen, (0, 0, 255), play_button)
        pg.draw.rect(screen, (255, 0, 0), quit_button)
        pg.draw.rect(screen, (255, 204, 51), achivements_button)

        play_text = button_font.render("Play", True, white)
        quit_text = button_font.render("Quit", True, white)
        achivements_button_text = button_font.render("Achievements", True, white)
        score_surface = Game_font.render(f"Score: {score}", True, text_gray)
        text_highscores = Game_font.render(f"Highscores:", True, text_gray)
        easy_highscore_text = Game_font.render(f"Easy: {player.easy_highscore}", True, text_gray)
        medium_highscore_text = Game_font.render(f"Medium: {player.medium_highscore}", True, text_gray)
        hard_highscore_text = Game_font.render(f"Hard: {player.hard_highscore}", True, text_gray)
        impossible_highscore_text = Game_font.render(f"Impossible: {player.impossible_highscore}", True, text_gray)

        screen.blit(play_text, play_text.get_rect(center=play_button.center))
        screen.blit(quit_text, quit_text.get_rect(center=quit_button.center))
        screen.blit(achivements_button_text, achivements_button_text.get_rect(center=achivements_button.center))
        screen.blit(score_surface, (10, 10))
        screen.blit(text_highscores, (10, SCREEN_HEIGHT - 200))
        screen.blit(easy_highscore_text, (10, SCREEN_HEIGHT - 160))
        screen.blit(medium_highscore_text, (10, SCREEN_HEIGHT - 120))
        screen.blit(hard_highscore_text, (10, SCREEN_HEIGHT - 80))
        screen.blit(impossible_highscore_text, (10, SCREEN_HEIGHT - 40))


        for event in pg.event.get():
            if event.type == pg.QUIT:
                run = False 
                menu_running = False 
            if event.type == pg.MOUSEBUTTONDOWN and event.button == 1:
                if play_button.collidepoint(event.pos):
                    score = 0
                    difficulty_menu()
                    return
                if achivements_button.collidepoint(event.pos):
                    achievements_menu()
                    return 
                if quit_button.collidepoint(event.pos):
                    run = False  
                    menu_running = False

        pg.display.update()
        clock.tick(60)
    pg.quit()


def difficulty_menu():
    global run  
    global meteor_spawn_time 

    pg.event.clear()

    clock = pg.time.Clock()

    easy_button = pg.Rect(SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT // 2 - 110, 300, 70)
    medium_button = pg.Rect(SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT // 2 - 30, 300, 70)
    hard_button = pg.Rect(SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT // 2 + 50, 300, 70)
    impossible_button = pg.Rect(SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT // 2 + 130, 300, 70)

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
        pg.draw.rect(screen, dark_red, impossible_button)

        easy_text = button_font.render("Easy", True, white)
        medium_text = button_font.render("Medium", True, white)
        hard_text = button_font.render("Hard", True, white)
        impossible_text = button_font.render("Impossible", True, white)

        screen.blit(easy_text, easy_text.get_rect(center=easy_button.center))
        screen.blit(medium_text, medium_text.get_rect(center=medium_button.center))
        screen.blit(hard_text, hard_text.get_rect(center=hard_button.center))
        screen.blit(impossible_text, impossible_text.get_rect(center=impossible_button.center))

        global meteor_spawn_time
        global difficulty
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
                elif impossible_button.collidepoint(event.pos):
                    meteor_spawn_time = 70
                    difficulty = "impossible"

                pg.time.set_timer(meteor_event, meteor_spawn_time)
                return
            
        pg.display.update()
        clock.tick(60)
    pg.quit()


def achievements_menu():
    global difficulty  
        
    pg.event.clear()

    achvmnt1_rect = pg.Rect(SCREEN_WIDTH // 2 - 300, SCREEN_HEIGHT // 2 - 110, 600, 70)
    achvmnt2_rect = pg.Rect(SCREEN_WIDTH // 2 - 300, SCREEN_HEIGHT // 2 - 30, 600, 70)
    achvmnt3_rect = pg.Rect(SCREEN_WIDTH // 2 - 300, SCREEN_HEIGHT // 2 + 50, 600, 70)
    achvmnt4_rect = pg.Rect(SCREEN_WIDTH // 2 - 300, SCREEN_HEIGHT // 2 + 130, 600, 70)
    achvmnt5_rect = pg.Rect(SCREEN_WIDTH // 2 - 300, SCREEN_HEIGHT // 2 + 210, 600, 70)

    achvmnt_exit_rect = pg.Rect(20, 40, 300, 70)

    achievment_running = True
    while achievment_running:

        if not achievment_running:
            return

        global achieved1, achieved2, achieved3, achieved4, achieved5

        achvmnt1 = False
        achvmnt2 = False
        achvmnt3 = False
        achvmnt4 = False
        achvmnt5 = False

        global achivement_color1, achivement_color2, achivement_color3, achivement_color4, achivement_color5
        achivement_color1 = red
        achivement_color2 = red
        achivement_color3 = red
        achivement_color4 = red
        achivement_color5 = red

        if score >= 50 and difficulty == "easy":
            achvmnt1 = True
        if score >= 30 and difficulty == "medium":
            achvmnt2 = True
        if score >= 20 and difficulty == "hard":
            achvmnt3 = True
        if score >= 10 and difficulty == "impossible":
            achvmnt4 = True
        if score >= 100:
            achvmnt5 = True

        if achvmnt1 == True:
            achivement_color1 = green
        if achvmnt2 == True:
            achivement_color2 = green
        if achvmnt3 == True:
            achivement_color3 = green
        if achvmnt4 == True:
            achivement_color4 = green
        if achvmnt5 == True:
            achivement_color5 = green

        screen.fill("#3a2e3f")
        achievements_title_surf = title_font.render("Achievements", True, (200, 200, 200))
        achievements_title_rect = achievements_title_surf.get_rect(center=(SCREEN_WIDTH // 2, SCREEN_HEIGHT // 4 - 100))
        screen.blit(achievements_title_surf, achievements_title_rect)

        achvmnt1_text = Game_font.render("Score 50 points on easy difficulty", True, white)
        achvmnt2_text = Game_font.render("Score 30 points on medium difficulty", True, white)
        achvmnt3_text = Game_font.render("Score 20 points on hard difficulty", True, white)
        achvmnt4_text = Game_font.render("Score 10 points on impossible difficulty", True, white)
        achvmnt5_text = Game_font.render("Score 100 points on any difficulty", True, white)
        achvmnt_exit_text = Game_font.render("Go back", True, white)

        pg.draw.rect(screen, achivement_color1, achvmnt1_rect)
        pg.draw.rect(screen, achivement_color2, achvmnt2_rect)
        pg.draw.rect(screen, achivement_color3, achvmnt3_rect)
        pg.draw.rect(screen, achivement_color4, achvmnt4_rect)
        pg.draw.rect(screen, achivement_color5, achvmnt5_rect)
        pg.draw.rect(screen, dark_gray, achvmnt_exit_rect)

        screen.blit(achvmnt1_text, achvmnt1_text.get_rect(center=achvmnt1_rect.center))
        screen.blit(achvmnt2_text, achvmnt2_text.get_rect(center=achvmnt2_rect.center))
        screen.blit(achvmnt3_text, achvmnt3_text.get_rect(center=achvmnt3_rect.center))
        screen.blit(achvmnt4_text, achvmnt4_text.get_rect(center=achvmnt4_rect.center))
        screen.blit(achvmnt5_text, achvmnt5_text.get_rect(center=achvmnt5_rect.center))
        screen.blit(achvmnt_exit_text, achvmnt_exit_text.get_rect(center=achvmnt_exit_rect.center))

        for event in pg.event.get():
            if event.type == pg.QUIT:
                run = False  
                achievment_running = False  

            if event.type == pg.MOUSEBUTTONDOWN and event.button == 1:
                if achvmnt_exit_rect.collidepoint(event.pos):
                    menu()

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
black = (0, 0, 0)
white = (255, 255, 255)
red = (255, 0, 0)
green = (0, 230, 0)
blue = (0, 0, 255)
dark_gray = (169, 169, 169)
dark_red = (100, 0, 0)

# Load images
star_surf   = pg.image.load(join("Spaceship", "images", "star.png")).convert_alpha()
meteor_surf = pg.image.load(join("Spaceship", "images", "meteor.png")).convert_alpha()
laser_surf  = pg.image.load(join("Spaceship", "images", "laser.png")).convert_alpha()

# Load audio
laser_audio_load = mixer.music.load(join("Spaceship", "audio", "space_shooter_audio_laser.wav"))

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
    dt = clock.tick() / 1000  # Frame rate

    # Event loop
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

    if score > player.easy_highscore and difficulty == "easy":
        player.easy_highscore = score
        with open("easy.highscore.txt", "w") as file:
            file.write(str(player.easy_highscore))
    elif score > player.medium_highscore and difficulty == "medium":
        player.medium_highscore = score
        with open("medium.highscore.txt", "w") as file:
            file.write(str(player.medium_highscore))
    elif score > player.hard_highscore and difficulty == "hard":
        player.hard_highscore = score
        with open("hard.highscore.txt", "w") as file:
            file.write(str(player.hard_highscore))
    elif score > player.impossible_highscore and difficulty == "impossible":
        player.impossible_highscore = score
        with open("impossible.highscore.txt", "w") as file:
            file.write(str(player.impossible_highscore))

    achieved1 = "unachived" 
    achieved2 = "unachived" 
    achieved3 = "unachived" 
    achieved4 = "unachived" 
    achieved5 = "unachived"

    if score >= 50 and difficulty == "easy":
        achvmnt1 = True
        with open("achievement1.txt", "w") as file:
            achived1 = file.write("Achieved")
    if score >= 30 and difficulty == "medium":
        achvmnt2 = True
        with open("achievement2.txt", "w") as file:
            achived2 = file.write("Achieved")
    if score >= 20 and difficulty == "hard":
        achvmnt3 = True
        with open("achievement3.txt", "w") as file:
            achived3 = file.write("Achieved")
    if score >= 10 and difficulty == "impossible":
        achvmnt4 = True
        with open("achievement4.txt", "w") as file:
            achived4 = file.write("Achieved")
    if score >= 100:
        achvmnt5 = True
        with open("achievement5.txt", "w") as file:
            achived5 = file.write("Achieved")

    
    # Update the display
    pg.display.update()

pg.quit()