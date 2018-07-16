const color = [0x7d5bbe, 0xa3d3fe, 0x333333, 0x007acc, 0xf56154,  0xdc3522]
const snek = require("snekfetch")

exports.run = async (bot ,message) => {
	const res = await bot.snek.get('https://www.reddit.com/u/kerdaloo/m/dankmemer/top/.json?sort=top&t=day&limit=500')
	const posts = res.body.data.children.filter(post => post.data.preview)

	if (!bot.indexes.meme[message.channel.guild.id] || bot.indexes.meme[message.channel.guild.id] >= posts.length) {
		bot.indexes.meme[message.channel.guild.id] = 1
	}

	const post = posts[bot.indexes.meme[message.channel.guild.id]]
	bot.indexes.meme[message.channel.guild.id]++

	await message.channel.createMessage({ embed: {
		title: post.data.title,
		color: color[Math.floor(Math.random() * color.length)],
		url: post.data.url,
		image: { url: post.data.preview.images[0].source.url },
		description: post.data.url,
		footer: { text: `posted by ${post.data.author}` }
	}})
}
