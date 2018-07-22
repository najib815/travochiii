const { shuffle } = require('../../util/Util');

module.exports = {
			args: [
				{
					key: 'first',
					label: 'first name',
					prompt: 'Who is the first person you choose?',
					type: 'string',
					max: 500
				},
				{
					key: 'second',
					label: 'second name',
					prompt: 'Who is the second person you choose?',
					type: 'string',
					max: 500
				},
				{
					key: 'third',
					label: 'third name',
					prompt: 'Who is the third person you choose?',
					type: 'string',
					max: 500
				}
			]

	run(message, { first, second, third }) {
		const things = shuffle([first, second, third]);
		return message.say(`I'd kiss ${things[0]}, marry ${things[1]}, and kill ${things[2]}.`);
	}
};
