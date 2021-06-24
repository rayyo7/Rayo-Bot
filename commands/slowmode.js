module.exports = {
    name: "slowmode",
    description: "Lets you set slowmode on the channel.",
    args: true,
    usage: "<time>",
    run: (client, message, args) => {
        const amount = parseInt(args[0])
        if(message.member.hasPermission("MANAGE_CHANNEL"))
        if(isNaN(amount)) return message.channel.send("Número inválido")
        if(args[0] === amount + "s") {
        message.channel.setRateLimitPerUser(amount)
        if(amount > 1) {
        message.channel.send("<a:emoji_10:797111496462827530> Modo lento agora está em " + amount + " segundos")
        return
        }
        else {message.channel.send("<a:emoji_10:797111496462827530> Modo lento agora está em " + amount + " segundos")
        return }
    } if(args[0] === amount + "min") {
        message.channel.setRateLimitPerUser(amount * 60)
        if(amount > 1) {
        message.channel.send("<a:emoji_10:797111496462827530> Modo lento agora está em " + amount + " minutos")
        return
        } else { 
            message.channel.send("<a:emoji_10:797111496462827530> Modo lento agora está em " + amount + " minuto")   
             
    
    return }
    } if(args[0] === amount + "h") {
        message.channel.setRateLimitPerUser(amount * 60 * 60)
        if(amount > 1) {         message.channel.send("<a:emoji_10:797111496462827530> Modo lento agora está em "  + amount + " horas")
        return
        } else {
            message.channel.send("<a:emoji_10:797111496462827530>  Modo lento agora está em " + amount + " hora")
        return}
    } else {
        message.channel.send("<a:negativo:787789323197743115> Use: segundos(s), minutos(min) horas(h)")
    }

    }
}
