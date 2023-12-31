from tkinter import *
import math
# ---------------------------- CONSTANTS ------------------------------- #
RED = "#A75D5D"
PINK = "#D3756B"
ORANGE = "#F0997D"
YELLOW = "#FFC3A1"
FONT_NAME = "Courier"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20

# ---------------------------- TIMER RESET ------------------------------- # 

# ---------------------------- TIMER MECHANISM ------------------------------- # 
def start_timer():
    count_down(0,5 * 60)
# ---------------------------- COUNTDOWN MECHANISM ------------------------------- # 
def count_down(count):

    count_min = math.floor (count / 60)
    count_sec = count % 60

    if count_sec < 10:
        count_sec = f"0{count_sec}"

    canvas.itemconfig(timer_text, text = f"{count_min}:{count_sec}")
    if count > 0:
        window.after(1000, count_down, count - 1)

# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("Pomodoro")
window.config(padx = 100, pady = 50, bg = YELLOW)

name_label = Label(text = "Timer", font= (FONT_NAME, 50, "bold"), background= YELLOW, fg= RED)
name_label.grid(column=1, row=0)

canvas = Canvas(width=200, height=224, bg = YELLOW, highlightthickness=0)
tomato_image = PhotoImage(file="tomato.png")
canvas.create_image(100,112,image = tomato_image)
timer_text = canvas.create_text(100,130, text = "00:00", fill = "white", font= (FONT_NAME, 35, "bold"))



canvas.grid(column=1, row=1)




start_button = Button(text="Start", highlightthickness=0, highlightbackground=YELLOW, fg = RED, font=(FONT_NAME, 13, "bold"), command=start_timer)

start_button.grid(column = 0, row = 2)

reset_button = Button(text="Reset", background= YELLOW, highlightthickness=0, highlightbackground=YELLOW,fg = RED, font = (FONT_NAME, 13, "bold"))
reset_button.grid(column = 3, row = 2)

label_checkpoint = Label(text = "✔", font= (FONT_NAME, 20, "bold"), background= YELLOW, fg = PINK)
label_checkpoint.grid(column = 1, row = 3)
window.mainloop()