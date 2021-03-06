exports.conf = {
	"noRepl": true,
	"auth": "fill this in your turntableUserAuth cookie",
	"userid": "fill this in from your turntableUserId cookie",
	"roomid": "fill this in from TURNTABLE_ROOMID in view-source:turntable.fm/$ROOM",
	"greetings_filename": "conf/test-greetings.json",
	"banList": [],
	"messages": {
		"help": "Welcome to {room.name}! I am a bot who understands commands and gives stats.  To view a list of commands, type *commands.",
		"defaultGreetings": [
			"Hi {user.name}!",
			"Hello {user.name}",
			"Hey there {user.name}"
		],
		"newUserGreetings": [
			"Welcome to turntable {user.name}!",
			"Hi {user.name}, welcome to turntable!"
		],
		"newModerator": "{user.name} is now a moderator in {room.name}.  With great power comes great responsibility."
	}
}
