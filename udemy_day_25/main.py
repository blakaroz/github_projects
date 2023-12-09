berimport turtle
import pandas

screen = turtle.Screen()
screen.title("U.S. States Game")
image = "blank_states_img.gif"
screen.addshape(image)
turtle.shape(image)

data = pandas.read_csv("50_states.csv")
all_states = data.state.to_list()
guessed_state = []


#game is on if not 50/50
while len(guessed_state) < 50:
        answer_state = screen.textinput(f"{len(guessed_state)}/50 States Correct", "What's a state you remember?").title()
        if answer_state == "Exit":
                states_to_learn = [state for state in all_states if state not in guessed_state]
                to_learn = pandas.Series(states_to_learn)
                to_learn.to_csv("states_to_learn.csv")
                break
        if answer_state in all_states:
                t = turtle.Turtle()
                t.hideturtle()
                t.penup()
                state_data = data[data.state == answer_state]
                t.goto(int(state_data.x), int(state_data.y))
                t.write(state_data.state.item())
                guessed_state.append(answer_state)



#print(states_to_learn)
        
