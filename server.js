const Discord = require("discord.js");
const ms = require('ms');
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on("ready", () => {
  console.log(`Du yu now da wae¿ 
conectado en ${client.guilds.cache.size} servidores y  ${client.users.cache.size} usuarios.`);

  client.user.setPresence( {
      activity: {
          name: `uk!help  |  ¡Estoy en ${client.guilds.cache.size} servidores! ¡¿No es asombroso?!`,
          type: "PLAYING"
      },
      status: "dnd"
   });

});

client.on("guildMemberAdd", (member) => {
  let canal = client.channels.cache.get('743946776289214516'); 
  canal.send(`Hey, ${member.user} se ha unido a ${member.guild.name}`);
 
});

client.on("guildMemberRemove", (member) => {
    let canal = client.channels.cache.get('744185938791497798'); 
    canal.send(`${member.user} se ha ido de ${member.guild.name}`);
   
});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'fbi')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`¡¡¡CUIDADO!!! ¡¡¡El FBI va a por **${mencionado.username}**!!!`);
  }
  if(message.content.startsWith(prefix + 'help')) {
    
    message.channel.send({embed: {
    color: 3447003,
    author: {
        name: client.user.username,
        icon_url: client.user.avatarURL()
    },
    title: "Enlace para usar este Bot",
    url: "https://discord.com/oauth2/authorize?client_id=732170500188405821&scope=bot&permissions=2146958847",
    description: "Si haces click arriba donde dice Enlace para usar este Bot te lleva a un enlace para usar este bot",
    fields: [{
        name: "uk!help",
        value: "Este comando sirve para abrir este panel"
      },
      {
        name: "uk!boom",
        value: "Este comando sirve para hacer una explosión"
      },
      {
        name: "uk!kill <@quien sea>",
        value: "Este comando sirve para matar a alguien"
      },
      {
        name: "uk!revive <@quien sea>",
        value: "Este comando sirve para revivir a alguien"
      },
      {
        name: "uk!death note <@quien sea>",
        value: "Este comando sirve para escribir el nombre de alguien en la Death Note"
      },
      {
        name: "uk!death eraser <@quien sea>",
        value: "Este comando sirve para borrar el nombre de alguien en la Death Note"
      },
      {
        name: "uk!shut-up <@quien sea>",
        value: "Este comando sirve para mandar callar a alguien"
      },
      {
        name: "uk!hola <@quien sea>",
        value: "Este comando sirve para saludar a alguien"
      },
      {
        name: "uk!chat muerto",
        value: "Este comando sirve para avisar de que nadie está hablando"
      },
      {
        name: "uk!nope",
        value: "Este comando sirve para que la gente sepa que dices **NO**"
      },
      {
        name: "uk!ok",
        value: "Este comando sirve para decir **OK**"
      },
      {
        name: "uk!wtf",
        value: "Este comando sirve para decir **¡¡¡¿¿¿WTF???!!!**"
      },
      {
        name: "uk!punch <@quien sea>",
        value: "Este comando sirve para pegar a aguien"
      },
      {
        name: "uk!nmms",
        value: "Este comando sirve simplemente para decir **A weno nomames :v**"
      },
      {
        name: "uk!love <@quien sea> <@quien sea 2>",
        value: "Este comando sirve para medir el amor entre dos personas mencionadas"
      },
      {
        name: "uk!pat <@quien sea>",
        value: "Este comando sirve para acariciar a la persona que hayas mencionado"
      },
      {
        name: "uk!invite",
        value: "Este comando sirve para que yo (Ugandan Knuckles) envie un enlace para invitar el bot (yo soy el bot) a tu servidor de Discord"
      },
      {
        name: "uk!serverstats",
        value: "Este comando sirve para ver el estado del servidor (el ID, el creador del server...)"
      },
      {
        name: "uk!timer <los segundos/minutos/horas que quieras>",
        value: "El bot contará hasta el número que le has dicho y terminará el temporizador. Ejemplo: uk!timer 4s | Contará 4 segundos"
      },
      {
        name: "uk!print <lo que quieras>",
        value: "El bot mandará cualquier cosa que le hayas puesto después del uk!print"
      },
      {
        name: "uk!embed <lo que quieras>",
        value: "El bot mandará cualquier cosa que le hayas puesto después del uk!embed"
      },
      {
        name: "uk!say <lo que quieras>",
        value: "El bot mandará cualquier cosa que le hayas puesto después del uk!say"
      },
      {
        name: "uk!suggest <una sugeréncia>",
        value: "Este comando sirve para hacer una sugeréncia, sea para un servidor o cualquier otra cosa"
      },
      {
        name: "Esto no es lo único",
        value: "¿Crees que esos eran todos los comandos? ¿Eso pensabas? Pues no, hay unos comandos secretos, pero supongo que te puedes apañar con esto, ¡Adiós! ***UWU***"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "Bot Hecho por 🅺🅸🆃🆂🆄🅼🅴#6521"
    }
  }
});

}

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'shut-up')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${message.author.username}** manda callar a **${mencionado.username}**
https://tenor.com/view/tokyo-ghoul-gif-9790004`);
  }
  if(message.content.startsWith(prefix + 'boom')) {
    message.channel.send({embed: {
      color: 3447003,
      description: "¡¡¡BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM!!! :3"
    }});

  }
});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'boom')) {
    message.channel.send("https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'death note')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${message.author.username}** escribe el nombre de **${mencionado.username}** en la Death Note
https://tenor.com/view/light-death-note-sign-ballpen-pen-gif-4899316`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'hola')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${message.author.username}** saluda a **${mencionado.username}**
https://cdn.discordapp.com/attachments/399448944889036801/596153391990702111/28NIdTp.gif`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'chat muerto')) {
    message.channel.send("¡¡¡ALERTA ALERTA!!! ¡¡¡EL CHAT MURIÓ!!!");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'chat muerto')) {
    message.channel.send("https://tenor.com/view/el-chat-se-murio-llamen-auna-ambulancia-el-chat-murio-llamen-gif-14665520");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'nope')) {
    message.channel.send("Dice q no :3");
  }
  if(message.content.startsWith(prefix + 'ok')) {
    message.channel.send({embed: {
      color: 3447003,
      description: "**POS OK**"
    }});

  }
});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'no-u')) {
    message.channel.send(`${message.author.username} ha usado la carta mágica :0`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'no-u')) {
    message.channel.send("https://media1.tenor.com/images/ac86a0fe830a8da1a2be37d804b277c8/tenor.gif?itemid=16633402");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'revive')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${message.author.username}** ha revivido a **${mencionado.username}** ***UWU***
https://cdn.discordapp.com/attachments/541402053998673950/606206291949649950/2rx3lgo1bpj01.gif`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'death eraser')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${message.author.username}** ha borrado el nombre de **${mencionado.username}** de la Death Note con la Death Eraser`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'wtf')) {
    message.channel.send(`**${message.author.username}** dice...
¡¡¡¿¿¿WTF???!!!
¡¡¡¿¿¿WATAFAK???!!!
https://tenor.com/view/anime-cute-shocked-zoom-surprised-gif-15198304`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'punch')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${message.author.username}** ha golpeado a **${mencionado.username}** :c
https://media.discordapp.net/attachments/399448944889036801/623609007344582666/39970522eee53b96f4d4792418a67ad3.gif`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'nmms')) {
    message.channel.send("A weno nomames");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'dance')) {
    message.channel.send(`**${message.author.username}** se puso a bailar`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'gay')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`Según **${message.author.username}**, **${mencionado.username}** es gay`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'pendejo')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`Según **${message.author.username}**, **${mencionado.username}** es un pendejo`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'kamehameha')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${message.author.username}** le ha hecho un Kamehameha a **${mencionado.username}** :0  |  https://tenor.com/view/vegito-final-kamehameha-vegito-blue-super-saiyan-gif-11539971`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'avatar')) {
    let miembro = message.mentions.users.first()
    if (!miembro) {
        const embed = new Discord.MessageEmbed()
            .setImage(`${message.author.displayAvatarURL()}`)
            .setColor(0x66b3ff)
            .setFooter(`${message.author.username}, este es tu avatar`);
        message.channel.send(embed);
    
    } else {
        const embed = new Discord.MessageEmbed()
            .setImage(`${miembro.displayAvatarURL()}`)
            .setColor(0x66b3ff)
            .setFooter(`${message.author.username}, este es el avatar de ${miembro.tag}`);
    
        message.channel.send(embed);
    
    };
    
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'serverstats')) {
    var server = message.guild;
  
    const embed = new Discord.MessageEmbed()
        .setThumbnail(server.iconURL())
        .setAuthor(server.name, server.iconURL())
        .addField('ID del Servidor', server.id, true)
        .addField('Región del Servidor', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño Original del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
        .addField('Miembros del Servidor', server.memberCount, true)
        .setColor(0x66b3ff)
        
    message.channel.send(embed);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'serverinfo')) {
    var server = message.guild;
  
    const embed = new Discord.MessageEmbed()
        .setThumbnail(server.iconURL())
        .setAuthor(server.name, server.iconURL())
        .addField('ID del Servidor', server.id, true)
        .addField('Región del Servidor', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño Original del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
        .addField('Miembros del Servidor', server.memberCount, true)
        .setColor(0x66b3ff)
        
    message.channel.send(embed);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'invite')) {
    message.channel.send(`**${message.author.username}** para invitarme a tu servidor, usa el siguiente enlace:
https://discord.com/oauth2/authorize?client_id=732170500188405821&scope=bot&permissions=2146958847`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'love')) {
    let users = message.mentions.users.map(m => m.username).join(' y ');
    if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
        
    const random = Math.floor(Math.random() * 100);
    let heard = "";
     
        if(random < 50){
            heard=':broken_heart:';
    
        }else if(random < 80){
            heard=':sparkling_heart: ';
            
        }else if(random < 101){
            heard=':heart:';
    
        }
                
    const embed = new Discord.MessageEmbed()
        .setAuthor('El porcentaje de amor de '+users+' es:')
        .setDescription(heard+' **'+random+' %**'+' '+heard)
        .setColor(0xff4d4d)
    
    message.channel.send(embed);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'ntp')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`Una cosita, **${mencionado.username}**... **${message.author.username}** NO TE PREGUNTÓ CONCHETUMARE  
https://cdn.discordapp.com/attachments/635411303930003457/709409610225811567/no_t_pregunte_cnchtm.png`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'karm')) {
    message.channel.send("Dedicado a mario sj: https://i.imgur.com/IwSL2ZP.gif");
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'confirmo')) {
    message.channel.send(`**${message.author.username} CONFIRMA DE UNA MANERA MUY CONFIRMADA CONFIRMANDO CONFIRMACIONES**
https://images7.memedroid.com/images/UPLOADED670/5dc6f5f02c9f6.jpeg`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'confirmamos')) {
    message.channel.send(`**${message.author.username}, TODOS CONFIRMAMOS**
https://cdn.discordapp.com/attachments/718413328774594581/718413339109359656/unknown.png`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'uwu')) {
    message.channel.send(`**${message.author.username} ESTÁ EMITIENDO UN UWU MAGESTUOSO**
https://tenor.com/view/egoz-uwu-uwu-army-dance-party-gif-15090789`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'furro')) {
    let mencionado = message.mentions.users.first();
    if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${mencionado.username} ES UN FURRO TREMENDO**
https://tenor.com/view/discord-uwu-sweat-blush-gif-13566033`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'die')) {
    let mencionado = message.mentions.users.first();
        if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${mencionado.username}** no está muerto...
**PORQUE ESTÁ MUERTÍSIMO**
Efe en el chat por **${mencionado.username}**
F
*inserte música del ataúd*
https://tenor.com/view/rip-coffin-black-ghana-celebrating-gif-16743302`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'print')) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let texto = args.join(" ");

    if(!texto) return message.channel.send(`Escriba el contenido a enviar`);

    message.channel.send(texto);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'embed')) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let texto = args.join(" ");

    if(!texto) return message.channel.send(`Escriba el contenido a enviar`);

    message.channel.send({embed: {
      color: 3447003,
      description: texto
    }
});

}

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'timer')) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  let timer = args[0];

  if(!args[0]){
    return message.channel.send("Error :x: " + "| Por favor, pon una cantidad \"s, m, h\"");
  }

  if(args[0] <= 0){
    return message.channel.send("Error :x: " + "| Por favor, pon una cantidad \"s, m, h\"");
  }

  message.channel.send("⏲️" + "| El tiempo ha comenzado | " + `${ms(ms(timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` ¡¡¡TIEMPO!! ha durado: ${ms(ms(timer), {long: true})}`)

  }, ms(timer));
}

module.exports.help = {
    name: "timer"

}

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'suggest')) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    message.delete()
    let texto = args.join(" ");

    if(!texto) return message.channel.send(`Escriba la sugeréncia`);

    message.channel.send({embed: {
      color: 3447003,
      title: `Sugeréncia de: **${message.author.username}**`,
      description: texto,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
      }
    }
});

}

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'sugest')) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    message.delete()
    let texto = args.join(" ");

    if(!texto) return message.channel.send(`Escriba la sugeréncia`);

    message.channel.send({embed: {
      color: 3447003,
      title: `Sugeréncia de: **${message.author.username}**`,
      description: texto,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
      }
    }
});

}

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'kill')) {
    let mencionado = message.mentions.users.first();
        if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${message.author.username}** ha matado a **${mencionado.username}** :C
https://images-ext-2.discordapp.net/external/IF5RQJpcOpBuXRzL54ARhYtoiM0vrtKoSox7WyK0AHI/https/cdn.weeb.sh/images/BymCu383W.gif`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'say')) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  message.delete()
  let texto = args.join(' ');
  message.channel.send(texto);
}

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + 'pat')) {
    let mencionado = message.mentions.users.first();
        if(!mencionado) return message.reply(`No has mencionando a ningún miembro`);
    message.channel.send(`**${message.author.username}** acaricia a **${mencionado.username}** uwu
https://cdn.discordapp.com/attachments/399448944889036801/722409482742792283/8ea8c63a-6c36-4c68-865c-2c1ab86eebcc.gif`);
  }

});

client.on("message", (message) => {
  if(message.content.startsWith(prefix + '.pat')) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let texto = args.join(" ");

    if(!texto) return message.channel.send(`No has mencionado a nadie`);

    message.channel.send(`**${message.author.username}** acaricia a **${texto}**
https://cdn.discordapp.com/attachments/399448944889036801/722409482742792283/8ea8c63a-6c36-4c68-865c-2c1ab86eebcc.gif`);
  }

});
client.login(config.token);