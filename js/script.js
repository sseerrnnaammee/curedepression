/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
	'y': {
		name: '叙事者',
		color: '#5bcaff'
	}
});

monogatari.script ({
	// 游戏开始，这是第一天
	'Start': [
		'show scene #f7f6f6 with fadeIn', //场景：篝火地
		'y 你好啊',
		'y 你能坐过来吗？',
		// 在这里切换拉近版的场景
		'y ...',
		'y 我看你的心情好像不太好',
		'y ...',
		'y 说实话，我不想看到你如此落魄',
		'y 所以我想跟你一起走出这个困境',
		{
			'Choice': {
				'Dialog': 'y 可以吗？',
				'Yes': {
					'Text': '好',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': '不好',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'y 我很高兴你能同意!',
		'y 你已经迈出一大步了',
		'y 首先，我想要你帮我一个忙',
		'y 你能拥抱一下你自己吗？',
		'y 像这样',//人物做动作
		'y ...',
		'y 要保持10秒钟才有效果',
		'y 我能想象你一定经历过许多风风雨雨',
		'y 不过我没法亲自来安慰你',
		'y 嗯...',
		'y 你喜欢礼物吗？',
		'y 我给你做个礼物，怎么样？',
		'y ...',
		'y 好吧，现在还没有什么灵感',
		'y 给我一点时间准备惊喜，明天再来找我吧，还是这个地方',
		'end'//这里进入等待状态
	],

	'No': [
		'没事，我一直在这里，你可以随时再来',
		'end'
	],
	});

monogatari.script ({
	// 这是第二天
	'Day2': [
		'y 你来啦',//场景：篝火地
		'y 请坐',
		'y ...',
		'y 你脸色不太好啊',
{
			'Choice': {
				'Dialog': '你还好吗？',
				'good': {
					'Text': '不错',
					'Do': 'jump good'
				},
				'soso': {
					'Text': '还行',
					'Do': 'jump soso'
				},
				'bad': {
					'Text': '不太好',
					'Do': 'jump bad'
				}
			}
		}
	],

	'good': [
		'你开心就好',
		'jump Next'
	],

	'soso': [
		'y 那我给你看个好东西',
		'end'
	],

	'bad': [
		'y 我给你看个好东西安慰你吧',
		'end'
	],
});
