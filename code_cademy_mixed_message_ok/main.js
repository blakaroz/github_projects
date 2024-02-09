const tellMeWhoAmI = () => {
    const whoAreYou = {
    animal: ["elephant (sth about your weight probably)", "pigeon (neuter and common)", "mosquito (no one likes you)"],
    food: ["pizza (everyone loves you)", "bread (even when you are old you can be a piece of tasty toast)", "pear (you have great body shape)",
    ]
    };

    let randomIndex = Math.floor(Math.random() * whoAreYou.animal.length)

    choicesOutput = [];
    for (let choice in whoAreYou) {
        

        switch (choice) {
            case "animal":
                choicesOutput.push(`Compering to animal: You are ${whoAreYou[choice][randomIndex]}.`);
                break;
            case "food":
                choicesOutput.push(`Compering to food: You are like ${whoAreYou[choice][randomIndex]}.`)
                break;
            default:
                choicesOutput.push("There is no info about you.")
                break;
        }
    }

    console.log(choicesOutput.join("\n"))
}

tellMeWhoAmI()