
let embed1 = new Discord.MessageEmbed()
.setColor("#ff0005")
.setTitle("Opérateur")
.setDescription("911, quelle est votre urgence ?")
.setFooter("(c)call 911 | 2021.")
newchannel.send(embed1)
let embed2 = new Discord.MessageEmbed()
.setColor("#ff0005")
.setTitle("Appelant")
.setDescription("IL Y A LE FEU !")
.setFooter("(c)call 911 | 2021.")
newchannel.send(embed2)
let embed3 = new Discord.MessageEmbed()
.setColor("#ff0005")
.setTitle("Opérateur")
.setDescription("1 | Calmez vous, êtes-vous en sécurité ?\n2 | Merci ! Je viens de me rappeler que j'avait mit mon poulet au four, j'allais l'oublier !\nRépondez par \"1\" ou par \"2\".")
.setFooter("(c)call 911 | 2021.")
newchannel.send(embed3)
let filter = (message) => { return message.author.id == idmember; }
await newchannel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
    let newMessage = await collected.first();
        if(newMessage.content === "1"){
            let embed5 = new Discord.MessageEmbed()
            .setColor("#ff0005")
            .setTitle("Appelant")
            .setDescription("Oui, Mais sa brûle beaucoup")
            .setFooter("(c)call 911 | 2021.")
            newchannel.send(embed5)
            let embed6 = new Discord.MessageEmbed()
            .setColor("#ff0005")
            .setTitle("Opérateur")
            .setDescription("1 | Parfait, pas besoin d'envoyer de véhicules si vous êtes en sécurité ! Au revoir !\n2 | Qu'est ce qui brûle Madame ?\nRépondez par \"1\" ou par \"2\".")
            .setFooter("(c)call 911 | 2021.")
            newchannel.send(embed6)
            let filter = (message) => { return message.author.id == idmember; }
            await newchannel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
                let newMessage2 = await collected.first();
                    if(newMessage2.content === "1"){
                        let embed7 = new Discord.MessageEmbed()
                        .setColor("#ff0005")
                        .setDescription(":x: | Mission échouée, le salon va être supprimé dans 10 secondes.")
                        .setFooter("(c)call 911 | 2021.")
                        newchannel.send(embed7)
                        setTimeout(() => {
                        newchannel.delete()
                        }, 10000);
                    }else if(newMessage2.content === "2"){
                        let embed8 = new Discord.MessageEmbed()
                        .setColor("#ff0005")
                        .setTitle("Appelant")
                        .setDescription("MA MAISON !!! ELLE BRÛLE !!!")
                        .setFooter("(c)call 911 | 2021.")
                        newchannel.send(embed8)
                        let embed11 = new Discord.MessageEmbed()
                        .setColor("#ff0005")
                        .setTitle("Opérateur")
                        .setDescription("1 | Quelle est votre localisation ?\n2 | Elle est grande comment ?\nRépondez par \"1\" ou par \"2\".")
                        .setFooter("(c)call 911 | 2021.")
                        newchannel.send(embed11)
                        let filter = (message) => { return message.author.id == idmember; }
                        await newchannel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
                            let newMessage4 = await collected.first();
                                if(newMessage4.content === "1"){
                                    let embed12 = new Discord.MessageEmbed()
                                    .setColor("#ff0005")
                                    .setTitle("Appelant")
                                    .setDescription("910 streetcity")
                                    .setFooter("(c)call 911")
                                    newchannel.send(embed12)
                                    let embed9 = new Discord.MessageEmbed()
                                    .setColor("#ff0005")
                                    .setTitle("Opérateur")
                                    .setDescription("1 | D'accord, je vous envoie une ambulance ! Les secours arrivent !\n2 | D'accord, je vous envoie un fourgon incendie ! Les secours arrivent !\n3 | D'accord, je vous envoie un véhicule de police ! Les secours arrivent !\nRépondez par \"1\", \"2\", ou \"3\".")
                                    .setFooter("(c)call 911")
                                    newchannel.send(embed9)
                                    let filter = (message) => { return message.author.id == idmember }
                                    await newchannel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
                                        let newMessage3 = await collected.first();
                                            if(newMessage3.content === "1"){
                                                let embed7 = new Discord.MessageEmbed()
                                                .setColor("#ff0005")
                                                .setDescription(":x: | Mission échouée, le salon va être supprimé dans 10 secondes.")
                                                .setFooter("(c)call 911 | 2021.")
                                                newchannel.send(embed7)
                                                setTimeout(() => {
                                                newchannel.delete()
                                                }, 10000);
                                            }else if(newMessage3.content === "2"){
                                                let embed10 = new Discord.MessageEmbed()
                                                .setColor("#ff0005")
                                                .setTitle("Félicitations")
                                                .setDescription("Tu as mené à bien la mission ! L'appelant à été mis en sureté et le feu a été maitrisé !")
                                                .setFooter("(c)call 911")
                                                message.author.send(embed10)
                                                setTimeout(() => {
                                                    newchannel.delete()
                                                }, 15000);
                                            }else if(newMessage3.content === "3"){
                                                let embed7 = new Discord.MessageEmbed()
                                                .setColor("#ff0005")
                                                .setDescription(":x: | Mission échouée, le salon va être supprimé dans 10 secondes.")
                                                .setFooter("(c)call 911 | 2021.")
                                                newchannel.send(embed7)
                                                setTimeout(() => {
                                                newchannel.delete()
                                                }, 10000);
                                            }
                                    })
                                }else if(newMessage4.content === "2"){
                                    let embed7 = new Discord.MessageEmbed()
                                    .setColor("#ff0005")
                                    .setDescription(":x: | Mission échouée, le salon va être supprimé dans 10 secondes.")
                                    .setFooter("(c)call 911 | 2021.")
                                    newchannel.send(embed7)
                                    setTimeout(() => {
                                        newchannel.delete()
                                    }, 10000);
                                }
                        })
                    }
            })
        }else if(newMessage.content === "2"){
            let embed4 = new Discord.MessageEmbed()
            .setColor("#ff0005")
            .setDescription(":x: | Mission échouée, le salon va être supprimé dans 10 secondes.")
            .setFooter("(c)call 911 | 2021.")
            setTimeout(() => {
                newchannel.delete()
            }, 10000);
            newchannel.send(embed4)
        }
})