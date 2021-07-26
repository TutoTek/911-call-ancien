let embed4 = new Discord.MessageEmbed()
.setColor("#ff0005")
.setDescription(":x: | Mission échouée, le salon va être supprimé dans 10 secondes.")
.setFooter("(c)call 911 | 2021.")
let embed1 = new Discord.MessageEmbed()
.setColor("#ff0005")
.setTitle("Opérateur")
.setDescription("911, quelle est votre urgence ?")
.setFooter("(c)call 911 | 2021.")
newchannel.send(embed1)
let embed2 = new Discord.MessageEmbed()
.setColor("#ff0005")
.setTitle("Appelant")
.setDescription("Bonjour j'aimerais prendre une pizza pépperoni avec supplément frites s'il vous plaît")
.setFooter("(c)call 911 | 2021.")
newchannel.send(embed2)
let embed3 = new Discord.MessageEmbed()
.setColor("#ff0005")
.setTitle("Opérateur")
.setDescription("1 | Nous ne sommes pas une pizzeria madame...\n2 | Y a t-il une urgence qui nécéssite l'intervention des secours ?\n3 | D'accord nous envoyons un véhicule vous la livrer !\nRépondez par \"1\", \"2\" ou \"3\".")
newchannel.send(embed3)
let filter = (message) => { return message.author.id == idmember; }
await newchannel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
    let newMessage = await collected.first();
    if(newMessage.content === "2"){
        let embed5 = new Discord.MessageEmbed()
        .setColor("#ff0005")
        .setTitle("Appelant")
        .setDescription("... *[CRI]*")
        .setFooter("(c)call 911 | 2021.")
        newchannel.send(embed5)
        let embed6 = new Discord.MessageEmbed()
        .setColor("#ff0005")
        .setTitle("Opérateur")
        .setDescription("1 | Madame ? Madame ? Vous allez bien ?\n2 | Vous raccrochez car vous vous dites que ce n'était qu'une simple farce\nRépondez par \"1\" ou par \"2\"")
        .setFooter("(c)call 911 | 2021.")
        newchannel.send(embed6)
        let filter = (message) => { return message.author.id == idmember; }
        await newchannel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
            let newMessage2 = await collected.first();
            if(newMessage2.content === "1"){
                let embed8 = new Discord.MessageEmbed()
                .setColor("#ff0005")
                .setTitle("Appelant")
                .setDescription("... *[AUCUN SON]")
                .setFooter("(c)call 911 | 2021.")
                newchannel.send(embed8)
                let embed9 = new Discord.MessageEmbed()
                .setColor("#ff0005")
                .setTitle("SYSTEME")
                .setDescription("Localisation en cours ...")
                .setFooter('(c)call 911 | 2021.')
                newchannel.send(embed9).then(msg => {
                    setTimeout(() => {
                        let embed10 = new Discord.MessageEmbed()
                        .setColor("#ff0005")
                        .setTitle("SYSTEME")
                        .addField("Localisation réussie :", "876, blowstreet", false)
                        .setFooter("(c)call 911 | 2021.")
                        msg.edit(embed10)
                    }, 5000);
                  })
                let embed11 = new Discord.MessageEmbed()
                .setColor("#ff0005")
                .setTitle("Opérateur")
                .setDescription("\n1 | Vous pensez que c'est une farce et vous raccrochez\n2 | Les secours arrivent, ne bougez pas !\n3 | Vous pensez qu'il n'est pas nécéssaire de faire intervenir les secours\nRépondez par \"1\", \"2\", ou \"3\".")
                .setFooter("(c)call 911 | 2021.")
                newchannel.send(embed11)
                let filter = (message) => { return message.author.id == idmember; }
                await newchannel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
                    let newMessage3 = await collected.first();
                    if(newMessage3.content === "2"){
                        let embed12 = new Discord.MessageEmbed()
                        .setColor("#ff0005")
                        .setTtle("Appelant")
                        .setDescription("........*[PAN]*..")
                        .setFooter("(c)call 911 | 2021.")
                        newchannel.send(embed12)
                        let embed13 = new Discord.MessageEmbed()
                        .setColor("#ff0005")
                        .setTitle("Opérateur")
                        .setDescription("1 | Tu envoie une ambulance\n2 | Tu envoie les pompiers\n3 | Tu envoie la police\n4 | Tu demande l'intervention des forces spéciales (RAID)ainsi qu'une équipe médicale\Répondez par \"1\", \"2\", \"3\" ou \"4\".")
                        .setFooter("(c)call 911 | 2021.")
                        newchannel.send(embed13)
                        let filter = (message) => { return message.author.id == idmember; }
                        await newchannel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
                            let newMessage4 = await collected.first();
                            if(newMessage4.content === "4"){
                                let embed15 = new Discord.MessageEmbed()
                                .setColor("#ff0005")
                                .setTitle("Félicitations")
                                .setDescription("Tu as mené à bien la mission ! La personne est malheuresement retrouvée décédée à son domicile. Le cambrioleur a été arrêté.")
                                .setFooter("(c)call 911 | 2021.")
                                message.author.send(embed15)
                            }else if(newMessage4.content === "1" || newMessage4.content === "2" || newMessage4.content === "3"){
                                let embed14 = new Discord.MessageEmbed()
                                .setColor("#ff0005")
                                .setTitle("Echec d'une intervention : prise d'otage")
                                .setDescription("Tu as malheuresement raté ton intervention, voici la raison :\n```Tu as entendu un coup de feu, tu doit donc prendre en compte une potencielle victime. Tu doit également faire intervenir des forces spéciales (RAID) pour protéger et arrêter les potenciels tireurs.```")
                                .setFooter("(c)call 911 | 2021.")
                                
                                message.author.send(embed14)
                            }
                        })
                    }else if(newMessage3.content === "1"){
                        let embed7 = new Discord.messageEmbed()
                        .setColor("#ff0005")
                        .setTitle("Echec d'une intervention : prise d'otage")
                        .setDescription("Tu as malheuresement raté ton intervention, voici la raison :\n```Tu as entendu un cri ainsi qu'un silence continu après, il ce peut donc qu'il y ai une détresse importante. Tu doit donc envoyer les secours. Même si tu n'es pas certain que ce soit une réelle intervention, rassure la et dit lui que les secours arrivent.```")
                        .setFooter("(c)call 911 | 2021.")
                        message.author.send(embed7)
                        newchannel.send(embed4)
                    }else if(newMessage3.content === "3"){
                        let embed7 = new Discord.messageEmbed()
                        .setColor("#ff0005")
                        .setTitle("Echec d'une intervention : prise d'otage")
                        .setDescription("Tu as malheuresement raté ton intervention, voici la raison :\n```Tu as entendu un cri ainsi qu'un silence continu après, il ce peut donc qu'il y ai une détresse importante. Tu doit donc envoyer les secours. Même si tu n'es pas certain que ce soit une réelle intervention, rassure la et dit lui que les secours arrivent.```")
                        .setFooter("(c)call 911 | 2021.")
                        message.author.send(embed7)
                        newchannel.send(embed4)
                    }
                })

            }else if(newMessage2.content === "2"){
                let embed7 = new Discord.messageEmbed()
                .setColor("#ff0005")
                .setTitle("Echec d'une intervention : prise d'otage")
                .setDescription("Tu as malheuresement raté ton intervention, voici la raison :\n```Tu as entendu un cri, il ce peut donc qu'il y ai une détresse. Tu doit rester au téléphone pour tenter de géo-localiser le téléphone de l'appelant pour pouvoir envoyer les véhicules nécéssaires. Si tu as toujours la personne au bout du fil, demande lui son adresse, rassure la et dit lui que les secours arrivent.```")
                .setFooter("(c)call 911 | 2021.")
                message.author.send(embed7)
                newchannel.send(embed4)
            }
        })
    }else if(newMessage.content === "1"){
        let embed6 = new Discord.MessageEmbed()
        .setColor("#ff0005")
        .setTitle("Echec d'une intervention : prise d'otage")
        .setDescription("Tu as malheuresement raté ton intervention, voici la raison :\n```Lorsque tu recoit un appel de ce type, demande toujours à l'appelant si il y a un problème, car cela peut être un signal de détresse.```")
        .setFooter("(c)call 911 | 2021.")
        message.author.send(embed6)
        newchannel.send(embed4)
    }else if(newMessage.content === "3"){
        let embed6 = new Discord.MessageEmbed()
        .setColor("#ff0005")
        .setTitle("Echec d'une intervention : prise d'otage")
        .setDescription("Tu as malheuresement raté ton intervention, voici la raison :\n```Lorsque tu recoit un appel de ce type, demande toujours à l'appelant si il y a un problème, car cela peut être un signal de détresse.```")
        .setFooter("(c)call 911 | 2021.")
        message.author.send(embed6)
        newchannel.send(embed4)
    }
})