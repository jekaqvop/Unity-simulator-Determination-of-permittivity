(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ВОССТАНОВИТЬ_ргпнанпролджs_atlas_1", frames: [[0,0,2757,2044]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Растровоеизображение2 = function() {
	this.initialize(ss["ВОССТАНОВИТЬ_ргпнанпролджs_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.кнопка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AsaSvQlpg/ABhYIi5j0IhG7MQgJgOAAgTQADhVGphlQGphmIvAAQItAAGTBOQGTBOACBUQABA5hHAlIBRgeIAxaxQgbAWgYASQAfgVgDAwQgCAqgPgGQAqAZgpBVQhQCnlgA4QlgA5oDAEIg+ABQnaAAlTg7gAt1OVQAqgJAxgIQFpg7H+AAQFQAAEQAaIAAuHI4iAAg");
	this.shape.setTransform(-0.0013,0.012);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.кнопка, new cjs.Rectangle(-141.9,-125.7,283.8,251.5), null);


(lib.Символ37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ag5BbQgxglgCgyQgBgxAkgjQAkgjBAgGQBBgGAKAtQAKAtgEA3QgEA4gJAVQgKAVgvAGIgNAAQgoAAgqgfg");
	this.shape.setTransform(-0.0058,0.0257);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ37, new cjs.Rectangle(-10.9,-12.2,21.8,24.5), null);


(lib.Символ36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("EgkRgBKUAkMgBBAkXgAeIAADuMhIOABlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ36, new cjs.Rectangle(-232.2,-17,464.4,34), null);


(lib.Символ35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ag1EFQh9AAhPhOQhQhNAUhkQAUhjBahVQBZhVB1ADQBzACB2BLQB1BKgjBoQgjBnhoBSQhnBRh7AAIgCAAg");
	this.shape.setTransform(-0.0082,0.0216);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ35, new cjs.Rectangle(-32.2,-26.1,64.4,52.3), null);


(lib.Символ34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ak4E3QAQh9BVhmQgWgPgSgSQhRhOARhmQARhmBphBQBohBCCAJQCDAKBQBPQBRBQgRBmQgRBlhoBAQhOAxhcAHIhdDUQgUACgWAAQheAAhsgrg");
	this.shape.setTransform(-0.025,0.0261);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ34, new cjs.Rectangle(-31.9,-35.3,63.8,70.69999999999999), null);


(lib.Символ33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AjrC+QhFhJANh1QANh0BZhJQBZhKB0AFQB0AFBaBIQBZBJgVBuQgWBvhaBHQhaBGh+AFIgNAAQh2AAhChFg");
	this.shape.setTransform(-0.0276,0.0195);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ33, new cjs.Rectangle(-29.4,-25.9,58.8,51.8), null);


(lib.Символ32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AjtFLIA+jqQgYgNgVgRQhbhJAAhnQAAhnBbhIQBbhICBABQCCACBbBKQBbBKAABnQAABmhbBHQhEA2hYANIg6Dag");
	this.shape.setTransform(0,0.0243);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ32, new cjs.Rectangle(-31.2,-35.5,62.5,71.1), null);


(lib.Символ31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ag3CUQhfgMhIg0QhahBAAhdQAAhdBahCQBbhCCBAAQB/AABcBBQBcBBAEBfQADBZg1AsQAPgBAOAXQAOBDgDBGQgwAzhOAfgACcB4IAAAAIgBAAIABAAg");
	this.shape.setTransform(0.0081,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ31, new cjs.Rectangle(-31.3,-29.9,62.6,59.9), null);


(lib.Символ30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiwC7Qg+hRgih6Qgjh7A/gxQA+gwBggRQBfgRBnAtQBmAsAyCPQAxCNhABHQhABHiWAMIgjABQh6AAg2hHg");
	this.shape.setTransform(0.0044,0.0062);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ30, new cjs.Rectangle(-28.5,-25.8,57.1,51.7), null);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlWg8IKtgOIAACCIqiATg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ29, new cjs.Rectangle(-34.3,-7.5,68.6,15), null);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiABkQg7gwgDg1QgDg2BKgwQBKgxBRAPQBSAOAnAsQAmAsgFA1QgFA1gdAgQgeAfhiAHIgXABQhSAAgzgqg");
	this.shape.setTransform(0.0229,0.0223);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ28, new cjs.Rectangle(-19,-14.1,38.1,28.299999999999997), null);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AieBhQhBguAAgxQAAgvA9gwQA8gwBeABQBcACBHAuQBFAvAAAvQAAAxhCArQhCAshdADIgLAAQhVAAg9gsg");
	this.shape.setTransform(0,-0.0182);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ27, new cjs.Rectangle(-22.4,-14.1,44.8,28.2), null);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiCGXIgCgCQhPhRgthwQgthyBPg9QBPg8BhgJQBigJBfApQBfAnA3CLQA3CKg/BJIgPAQQg/A7h8ALQgTACgRAAQhwAAhFhGgAl0nNILpgPIAADyIrpAHg");
	this.shape.setTransform(0,-0.016);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ26, new cjs.Rectangle(-37.2,-47.7,74.5,95.4), null);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("EgkigBGMBJFgBhIAADxMhIzABeg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ25, new cjs.Rectangle(-233.9,-16.8,467.8,33.6), null);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AzVlGMAlrgBOIBALkMglKABFQhFl8gclfg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ24, new cjs.Rectangle(-123.8,-40.4,247.7,80.9), null);


(lib.Символ23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("EgwYAbGIpa9ZQhhkAAyi0QRyolRsn1MBR2gB6QpgIUurRXQiXDYivC6IDvWkQ0WAW0ZAAQ0bAA0fgWg");
	this.shape.setTransform(-0.0032,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ23, new cjs.Rectangle(-376.3,-175.6,752.6,351.2), null);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AptQ4QkEgwgPhCQgFgUASgSIgeAXQgmuSAmt4QAaAQAXAMIAGAAIgMgIQg1giAAgpQAAhbEPhBQEPhBF/AAQGAAAEOBBQEQBBAABbQAAAlgsAhIAxgfIg+ceIg/gCIAEANQAPBCjwAwQjvAwlhAAQliAAkGgwg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ22, new cjs.Rectangle(-93.3,-112.7,186.6,225.5), null);


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AltCzQiZhLAAhoQAAhoCZhKQCXhKDWAAQDXAACYBKQCYBKAABoQAABoiYBLQiYBKjXAAQjWAAiXhKg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(-51.9,-25.3,103.8,50.6), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlUBiIgZjDILbAAIAADDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(-36.6,-9.8,73.2,19.6), null);


(lib.Символ191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhOCKIAAgIQAaAAAWgLQAVgMAUgcQAVgdAHghQgeATgYAAQgcAAgUgWQgTgUAAgkQAAgiATgcQAYghAnAAQAgAAAXAbQAdAhgBAyQAAAqgVAnQgWAmgnAaQgeAUgmAAgAgjhsQgNAPAAAfQAAApARAWQANARASAAQAIAAANgEQANgEAJgIQADgYAAgQQAAgSgGgXQgHgWgMgMQgMgLgOAAQgRAAgNAQg");
	this.shape.setTransform(11.55,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnoC6Qgii0AAimQHpgtIjAiQARC1gRCwg");
	this.shape.setTransform(0.0121,0.0061);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(-52.2,-18.6,104.5,37.3), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag7ByQgRgTAAgXQAAgRANgRQAMgRAcgVQgfgZgJgQQgJgPAAgRQAAgaATgTQAUgSAhgBQAgAAATASQAUASAAAVQAAAPgLAQQgKAPgiAWQAjAZALAPQAOAUAAAWQAAAcgVAUQgVATgiABQglAAgWgYgAglAlQgJAQABASQgBAaAOAPQAOAPAUAAQAWAAAMgMQANgMAAgQQAAgPgHgLQgPgVgpghQgQAOgHAQgAgghxQgMALAAAQQAAAKAFAKQAFAKAKAJIAfAbQAYgWAGgMQAGgMAAgPQAAgVgMgLQgLgMgUAAQgTAAgNAMg");
	this.shape.setTransform(11.65,-1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgZCHIBOjtIhIAAQgWAAgKAFQgQAJgKATIgGgCIAZg/ICNAAIAAAHIhXEGg");
	this.shape.setTransform(11.45,-1.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgtB4QgmgjAAg4QAAgjAPggQAOgfAbgZQAagZAXgJQAYgJAVAAIAMAAIAAAIQgaADgQAHQgRAIgQAQQgPAQgKATQgLATgHAbQAdgTAbAAQAbAAAUAWQAUAVAAAiQAAAhgUAcQgZAggnABQgbAAgSgSgAgRgNQgIADgRAKQgDAaAAAQQAAASAHAXQAGAWAOAMQAKAKANAAQARAAAOgQQANgRAAgdQAAgigNgYQgOgXgXAAQgHAAgJADg");
	this.shape.setTransform(11.675,-1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhBB/QgLgIAAgKQAAgGAEgEQAFgEAHAAQAFAAAEACIANAIQAOAKAPAAQAWAAASgRQARgSAAgZQAAgYgQgUQgPgUgagMQgWgIgkgCIAyhnIBeAAIgPAiIhPAAIgRAjQAzAIAeAfQAaAaAAAjQAAAVgIASQgJASgNAMQgNANgQAHQgVALgYAAQgXAAgLgIg");
	this.shape.setTransform(11.225,-1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAWCHIAAhGIhvAAIAAgZIB6iuIAVAAIAACsIAkAAIAAAbIgkAAIAABGgAhGAmIBcAAIAAiDg");
	this.shape.setTransform(11.225,-1.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhACDQgKgHAAgHQAAgGAEgEQAFgFAGABIAKABIAPAIQAMAFAFABQAHADAIAAQATAAAOgPQAQgQgBgVQABgPgIgPQgEgLgHgGQgIgHgOgHQgPgHgPAAIgGAAIAAgEQAQgDAPgIQAOgKAIgNQAHgMAAgQQAAgUgMgMQgOgNgRAAQgeAAgUAhIgHgEQALgaARgOQARgPAagBQAfABARAUQANAQAAARQAAAegkAeQAZAJAMASQAMASAAAXQABAjgWAZQgdAhg1AAQgbAAgJgHg");
	this.shape.setTransform(10.75,-1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhXCHIAAgHQBFg/AbgoQAdgnAAghQAAgZgQgQQgPgQgVAAQgTAAgQALQgPAMgHAWIgIAAQAFgkAVgUQATgTAfAAQAfAAAVAVQAWAUAAAcQAAAVgJAUQgOAeghAkQgvA1gNALIBFAAQAVAAAIgCQAIgBAIgFQAGgFAFgJIAIAAIgTAzg");
	this.shape.setTransform(11.2,-1.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgvCHIAAgHQAUAAAFgDQAGgDACgFQABgFAAgXIAAiOQAAgdgBgJQgCgGgEgDQgDgDgFAAQgIAAgMAGIgDgGIBAgfIAGAAIAADfQAAAWACAFQABAGAHADQAFADASAAIAAAHg");
	this.shape.setTransform(10,-1.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhABdQgUgmAAg1QAAgsANghQAOggAWgRQASgNASAAQAeAAAZAfQAeAnAABCQgBAtgNAhQgNAfgUAPQgVAPgSAAQgmgBgagsgAgWhvQgOAQgFAiQgFAjgBAhQAAA2AOAjQAMAdAVAAQAKAAAMgJQAKgJAHgXQAIghABg9QAAgtgKgeQgHgWgLgKQgIgHgMAAQgMAAgKANg");
	this.shape.setTransform(11.6,-1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAFgDACgFQACgFAAgXIAAiOQAAgdgCgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIA/gfIAHAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape_1.setTransform(-9.5,-1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,66.3,61.8);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhOCKIAAgIQAaAAAWgLQAVgMAUgcQAVgdAHghQgeATgYAAQgcAAgUgWQgTgUgBgkQABgiATgcQAYghAnAAQAgAAAXAbQAcAhABAyQgBAqgVAnQgWAmgmAaQgfAUgmAAgAgjhsQgNAPAAAfQAAApARAWQANARASAAQAIAAANgEQAMgEAJgIQAEgYAAgQQAAgSgGgXQgHgWgMgMQgMgLgOAAQgQAAgOAQg");
	this.shape.setTransform(0.2,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,61.8,61.8);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag7ByQgRgTAAgXQAAgRANgRQAMgRAcgVQgfgZgJgQQgJgPAAgRQgBgaAVgTQATgSAhgBQAgAAATASQATASABAVQAAAPgLAQQgKAPgiAWQAjAZALAPQAOAUAAAWQAAAcgVAUQgVATgiABQglAAgWgYgAglAlQgIAQAAASQAAAaANAPQAOAPAUAAQAWAAAMgMQANgMAAgQQAAgPgIgLQgOgVgpghQgQAOgHAQgAgghxQgMALAAAQQAAAKAFAKQAFAKAKAJIAfAbQAXgWAHgMQAGgMAAgPQAAgVgMgLQgLgMgUAAQgTAAgNAMg");
	this.shape.setTransform(0.3,-1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,61.8,61.8);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgZCHIBNjtIhHAAQgWAAgJAFQgRAJgKATIgGgCIAZg/ICOAAIAAAHIhYEGg");
	this.shape.setTransform(0.1,-1.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,61.8,61.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgtB4QgmgjAAg4QAAgjAPggQAOgfAbgZQAagZAXgJQAYgJAVAAIAMAAIAAAIQgaADgQAHQgRAIgQAQQgPAQgKATQgLATgHAbQAdgTAbAAQAbAAAUAWQAUAVAAAiQAAAhgUAcQgZAggnABQgbAAgSgSgAgRgNQgIADgRAKQgDAaAAAQQAAASAHAXQAGAWAOAMQAKAKANAAQARAAAOgQQANgRAAgdQAAgigNgYQgOgXgXAAQgHAAgJADg");
	this.shape.setTransform(0.325,-1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,61.8,61.8);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhBB/QgLgIAAgKQAAgGAEgEQAFgEAHAAQAFAAAEACIANAIQAOAKAPAAQAWAAASgRQARgSAAgZQAAgYgQgUQgPgUgagMQgWgIgkgCIAyhnIBeAAIgPAiIhPAAIgRAjQAzAIAeAfQAaAaAAAjQAAAVgIASQgJASgNAMQgNANgQAHQgVALgYAAQgXAAgLgIg");
	this.shape.setTransform(-0.125,-1.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,61.8,61.8);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAWCHIAAhGIhvAAIAAgZIB6iuIAVAAIAACsIAkAAIAAAbIgkAAIAABGgAhGAmIBcAAIAAiDg");
	this.shape.setTransform(-0.125,-1.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,61.8,99.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhACDQgLgHAAgHQABgGAEgEQAFgFAGABIAKABIAPAIQAMAFAFABQAHADAIAAQATAAAOgPQAPgQAAgVQABgPgIgPQgFgLgFgGQgJgHgPgHQgOgHgPAAIgGAAIAAgEQAQgDAPgIQAOgKAIgNQAHgMAAgQQAAgUgMgMQgOgNgRAAQgeAAgUAhIgHgEQALgaARgOQARgPAagBQAfABARAUQANAQAAARQAAAegkAeQAYAJANASQAMASAAAXQAAAjgVAZQgdAhg1AAQgbAAgJgHg");
	this.shape.setTransform(-0.6,-1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,61.8,61.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhXCHIAAgHQBFg/AcgoQAcgnAAghQAAgZgQgQQgPgQgVAAQgTAAgQALQgPAMgHAWIgIAAQAFgkAVgUQATgTAfAAQAfAAAVAVQAWAUAAAcQAAAVgJAUQgPAeggAkQgwA1gMALIBEAAQAWAAAIgCQAJgBAGgFQAHgFAFgJIAIAAIgTAzg");
	this.shape.setTransform(-0.15,-1.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,61.8,61.8);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AguCHIAAgHQASAAAGgDQAGgDABgFQADgFAAgXIAAiOQAAgdgDgJQgBgGgDgDQgEgDgFAAQgHAAgNAGIgDgGIBAgfIAGAAIAADfQAAAWABAFQADAGAFADQAGADASAAIAAAHg");
	this.shape.setTransform(0.15,-1.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AErAAQAAB8hXBYQhYBXh8AAQh7AAhYhXQhXhYAAh8QAAh7BXhYQBYhXB7AAQB8AABYBXQBXBYAAB7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjTDTQhXhXAAh8QAAh7BXhYQBYhXB7AAQB8AABXBXQBYBYAAB7QAAB8hYBXQhXBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-30.9,61.8,61.8);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Коробка_");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ23();
	this.instance.setTransform(2.8,-3.45);
	this.instance.alpha = 0.1602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("EgwYAbGIpa9ZQhhkAAyi0QRyolRsn1MBR2gB6QpgIUurRXQiXDYivC6IDvWkQ0WAW0ZAAQ0bAA0fgWg");
	this.shape.setTransform(-0.0032,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-376.3,-179,755.4000000000001,354.6);


(lib._13Шкалачастоты_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_13Шкалачастоты");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ36();
	this.instance.setTransform(0,0.3);
	this.instance.alpha = 0.3711;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("EgkRgBKUAkMgBBAkXgAeIAADuMhIOABlg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.2,-17,464.4,34.3);


(lib._12Переключательподдиапазонов = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_12Переключательподдиапазоновгенератора");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ31();
	this.instance.setTransform(0.7,3.5);
	this.instance.alpha = 0.2695;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ag3CUQhfgMhIg0QhahBAAhdQAAhdBahCQBbhCCBAAQB/AABcBBQBcBBAEBfQADBZg1AsQAPgBAOAXQAOBDgDBGQgwAzhOAfgACcB4IAAAAIgBAAIABAAg");
	this.shape.setTransform(0.0081,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,-29.9,63.3,63.4);


(lib._11ПереключательпределовQ_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_11ПереключательпределовQ");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ32();
	this.instance.setTransform(-0.55,0.85);
	this.instance.alpha = 0.2891;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AjtFLIA+jqQgYgNgVgRQhbhJAAhnQAAhnBbhIQBbhICBABQCCACBbBKQBbBKAABnQAABmhbBHQhEA2hYANIg6Dag");
	this.shape.setTransform(0,0.0243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-35.5,63.1,72);


(lib._10ПереключательQdeltaQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_10Переключательродаизмерений");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ34();
	this.instance.setTransform(-2.25,2.05);
	this.instance.alpha = 0.2813;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ak4E3QAQh9BVhmQgWgPgSgSQhRhOARhmQARhmBphBQBohBCCAJQCDAKBQBPQBRBQgRBmQgRBlhoBAQhOAxhcAHIhdDUQgUACgWAAQheAAhsgrg");
	this.shape.setTransform(0.025,0.0261);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-35.3,66,72.8);


(lib._9Ручкакалибровки = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_9Ручкавыполнениякалибровки");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ33();
	this.instance.setTransform(-1.15,2.05);
	this.instance.alpha = 0.2891;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AjrC+QhFhJANh1QANh0BZhJQBZhKB0AFQB0AFBaBIQBZBJgVBuQgWBvhaBHQhaBGh+AFIgNAAQh2AAhChFg");
	this.shape.setTransform(0.0224,0.0195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-25.9,59.9,53.9);


(lib._8Ручкаустановкинуля = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_8РучкаустановкинуляДельтаQ");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ35();
	this.instance.setTransform(-2.85,1.5);
	this.instance.alpha = 0.2891;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ag1EFQh9AAhPhOQhQhNAUhkQAUhjBahVQBZhVB1ADQBzACB2BLQB1BKgjBoQgjBnhoBSQhnBRh7AAIgCAAg");
	this.shape.setTransform(-0.0082,0.0216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-26.1,67.2,53.8);


(lib._6тумблеризмерениекалибровка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_6Тумблеризмерениекалибровка");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ28();
	this.instance.setTransform(0,0.75);
	this.instance.alpha = 0.3398;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiABkQg7gwgDg1QgDg2BKgwQBKgxBRAPQBSAOAnAsQAmAsgFA1QgFA1gdAgQgeAfhiAHIgXABQhSAAgzgqg");
	this.shape.setTransform(0.0229,0.0223);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-14.1,38.1,29.1);


(lib._5кнопкасеть = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_5Тумблерсеть");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ27();
	this.instance.setTransform(-2.2,-0.45);
	this.instance.alpha = 0.3281;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AieBhQhBguAAgxQAAgvA9gwQA8gwBeABQBcACBHAuQBFAvAAAvQAAAxhCArQhCAshdADIgLAAQhVAAg9gsg");
	this.shape.setTransform(0,0.0318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-14.5,47,28.6);


(lib._4Клавишапривода = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_4Клавишавключенияэлектрическогоприводаручкиизмерительногоконденсатра");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ29();
	this.instance.setTransform(0,0.7);
	this.instance.alpha = 0.3789;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlWg8IKtgOIAACCIqiATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-7.5,68.6,15.7);


(lib._3Ручканастройкичастоты = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_3Ручканастройкичастотыгенератора");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ30();
	this.instance.setTransform(0,0.7);
	this.instance.alpha = 0.3203;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiwC7Qg+hRgih6Qgjh7A/gxQA+gwBggRQBfgRBnAtQBmAsAyCPQAxCNhABHQhABHiWAMIgjABQh6AAg2hHg");
	this.shape.setTransform(0.0044,0.0062);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-25.8,57.1,52.400000000000006);


(lib._2Линейнаяшкалаизмерительногоконденсатора_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_2Линейнаяшкалаизмерительногоконденсатора");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ25();
	this.instance.setTransform(-1.65,-0.9);
	this.instance.alpha = 0.3516;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("EgkigBGMBJFgBhIAADxMhIzABeg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.5,-17.7,469.4,34.5);


(lib._1Ручкаизмерительногоконденсатора = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_1Ручкаизмерительногоконденсатораснониуснойшкалой");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ26();
	this.instance.setTransform(0,-0.35);
	this.instance.alpha = 0.3008;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AiCGXIgCgCQhPhRgthwQgthyBPg9QBPg8BhgJQBigJBfApQBfAnA3CLQA3CKg/BJIgPAQQg/A7h8ALQgTACgRAAQhwAAhFhGgAl0nNILpgPIAADyIrpAHg");
	this.shape.setTransform(0,0.034);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-48,74.5,95.7);


(lib.Электроды_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Электроды");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ21();
	this.instance.setTransform(-2.6,-1.05);
	this.instance.alpha = 0.25;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AltCzQiZhLAAhoQAAhoCZhKQCXhKDWAAQDXAACYBKQCYBKAABoQAABoiYBLQiYBKjXAAQjWAAiXhKg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-26.4,106.4,51.8);


(lib.Экран = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("экран");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.кнопка();
	this.instance.alpha = 0.1602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AsaSvQlpg/ABhYIi5j0IhG7MQgJgOAAgTQADhVGphlQGphmIvAAQItAAGTBOQGTBOACBUQABA5hHAlIBRgeIAxaxQgbAWgYASQAfgVgDAwQgCAqgPgGQAqAZgpBVQhQCnlgA4QlgA5oDAEIg9ABQnbAAlTg7gAt1OVQAqgJAxgIQFpg7H+AAQFQAAEQAaIAAuHI4iAAg");
	this.shape.setTransform(-3.5013,4.312);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.4,-125.7,287.3,255.8);


(lib.Шкала2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Шкаладляотсчётарасстояниямеждуэлектродами");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ20();
	this.instance.setTransform(-0.5,0.35);
	this.instance.alpha = 0.4102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AlUBiIgZjDILbAAIAADDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-9.8,73.7,20);


(lib.Шкала1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Шкаладляотсчётарасстояниямеждуэлектродами");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ37();
	this.instance.setTransform(-0.85,0.75);
	this.instance.alpha = 0.3906;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ag5BbQgxglgCgyQgBgxAkgjQAkgjBAgGQBBgGAKAtQAKAtgEA3QgEA4gJAVQgKAVgvAGIgNAAQgoAAgqgfg");
	this.shape.setTransform(-0.0058,0.0257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-12.2,22.6,25.2);


(lib.Стрелочныйприбордлядобротности = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("_7ИзмерительныйприбордляотсчётадобротностиQ");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ24();
	this.instance.setTransform(0.05,0.85);
	this.instance.alpha = 0.1914;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AzVlGMAlrgBOIBALkMglKABFQhFl8gclfg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.8,-40.4,247.7,81.8);


(lib.Катушка = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Катушкаиндуктивности");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ22();
	this.instance.setTransform(-1.35,1.75);
	this.instance.alpha = 0.1602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AptQ4QkEgwgPhCQgFgUASgSIgeAXQgmuSAmt4QAaAQAXAMIAGAAIgMgIQg1giAAgpQAAhbEPhBQEPhBF/AAQGAAAEOBBQEQBBAABbQAAAlgsAhIAxgfIg+ceIg/gCIAEANQAPBCjwAwQjvAwlhAAQliAAkGgwg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.7,-112.7,188.10000000000002,227.2);


(lib.Головкавинта_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Головкавинта");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.instance = new lib.Символ19();
	this.instance.setTransform(-1.15,-0.9);
	this.instance.alpha = 0.2383;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnoC6Qgii0AAimQHpgtIjAiQARC1gRCwg");
	this.shape.setTransform(0.0121,0.0061);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.4,-19.5,105.69999999999999,38.2);


// stage content:
(lib.ВОССТАНОВИТЬ_ргпнанпролджs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой_1
	this.instance = new lib.Символ191("synched",0);
	this.instance.setTransform(584.05,310.05,0.5719,0.5719,0,0,0,2.5,0);

	this.instance_1 = new lib.Символ18("synched",0);
	this.instance_1.setTransform(256.7,270.4,0.5729,0.5729,0,0,0,2.6,0.1);

	this.instance_2 = new lib.Символ17("synched",0);
	this.instance_2.setTransform(824.05,55.65,0.5729,0.5729,0,0,0,2.5,0.1);

	this.instance_3 = new lib.Символ16("synched",0);
	this.instance_3.setTransform(789.05,121.15,0.5729,0.5729,0,0,0,2.6,0);

	this.instance_4 = new lib.Символ15("synched",0);
	this.instance_4.setTransform(838.75,181.1,0.5729,0.5729,0,0,0,2.5,0.1);

	this.instance_5 = new lib.Символ14("synched",0);
	this.instance_5.setTransform(958.55,290.7,0.5729,0.5729,0,0,0,2.6,0);

	this.instance_6 = new lib.Символ13("synched",0);
	this.instance_6.setTransform(668.5,385.6,0.5729,0.5729,0,0,0,2.5,0);

	this.instance_7 = new lib.Символ12("synched",0);
	this.instance_7.setTransform(779.1,597.45,0.5729,0.5729,0,0,0,2.5,0.1);

	this.instance_8 = new lib.Символ11("synched",0);
	this.instance_8.setTransform(685.9,591.65,0.5729,0.5729,0,0,0,2.6,0.1);

	this.instance_9 = new lib.Символ10("synched",0);
	this.instance_9.setTransform(454.65,598.9,0.5729,0.5729,0,0,0,0,0.1);

	this.instance_10 = new lib.Символ9("synched",0);
	this.instance_10.setTransform(543.55,600.3,0.5729,0.5729);

	this.instance_11 = new lib.Символ8("synched",0);
	this.instance_11.setTransform(367.2,585.15,0.5729,0.5729,0,0,0,0.1,0.1);

	this.instance_12 = new lib.Символ7("synched",0);
	this.instance_12.setTransform(484.25,382.75,0.5729,0.5729,0,0,0,0.1,0);

	this.instance_13 = new lib.Символ6("synched",0);
	this.instance_13.setTransform(1057.5,570.7,0.5729,0.5729,0,0,0,0.1,0);

	this.instance_14 = new lib.Символ5("synched",0);
	this.instance_14.setTransform(1073.4,383.8,0.5729,0.5729,0,0,0,0.1,19.2);

	this.instance_15 = new lib.Символ4("synched",0);
	this.instance_15.setTransform(859.15,597.75,0.5729,0.5729,0,0,0,0.1,0);

	this.instance_16 = new lib.Символ3("synched",0);
	this.instance_16.setTransform(933.95,597.75,0.5729,0.5729);

	this.instance_17 = new lib.Символ2("synched",0);
	this.instance_17.setTransform(744.3,378.45,0.5729,0.5729,0,0,0,0.1,0.1);

	this.instance_18 = new lib.Символ1("synched",0);
	this.instance_18.setTransform(1060.4,471.2,0.5729,0.5729,0,0,0,0.1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHy4mILnnsIq3iyAe/lcIPbAAAbJ26IsWG4EAFCgrQIT0AvEApDAb3Iq5M7EApPAhdIAyIvEAOMAhwID4JgEA0CAbtIJTKQAMiJuIAAIWEA0rARUILJqREApyAXDIUAgpIzxkrAAiJCIAAO7Eg/zgI9IAAMhEguhAoNILLn6EggnAqXIFknQA1Se4ICULtA8PIlIgmKCAt0iAISTjNEgF2AitIJGGh");
	this.shape.setTransform(665.025,327.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой_1
	this.instance_19 = new lib.Шкала2();
	this.instance_19.setTransform(697.95,101.55,0.5729,0.5729,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 2, false, new lib.Шкала2(), 3);

	this.instance_20 = new lib.Шкала1();
	this.instance_20.setTransform(714.05,168.6,0.5729,0.5729,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_20, 0, 1, 2, false, new lib.Шкала1(), 3);

	this.instance_21 = new lib._8Ручкаустановкинуля();
	this.instance_21.setTransform(443.3,526.05,0.5729,0.5729,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_21, 0, 1, 2, false, new lib._8Ручкаустановкинуля(), 3);

	this.instance_22 = new lib._10ПереключательQdeltaQ();
	this.instance_22.setTransform(491.05,550.65,0.5729,0.5729,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_22, 0, 1, 2, false, new lib._10ПереключательQdeltaQ(), 3);

	this.instance_23 = new lib._9Ручкакалибровки();
	this.instance_23.setTransform(528,523.65,0.5729,0.5729,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_23, 0, 1, 2, false, new lib._9Ручкакалибровки(), 3);

	this.instance_24 = new lib._11ПереключательпределовQ_1();
	this.instance_24.setTransform(626.85,548.15,0.5729,0.5729,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_24, 0, 1, 2, false, new lib._11ПереключательпределовQ_1(), 3);

	this.instance_25 = new lib._12Переключательподдиапазонов();
	this.instance_25.setTransform(755.1,541.95,0.5729,0.5729);
	new cjs.ButtonHelper(this.instance_25, 0, 1, 2, false, new lib._12Переключательподдиапазонов(), 3);

	this.instance_26 = new lib._3Ручканастройкичастоты();
	this.instance_26.setTransform(928.15,540.15,0.5729,0.5729,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_26, 0, 1, 2, false, new lib._3Ручканастройкичастоты(), 3);

	this.instance_27 = new lib._13Шкалачастоты_1();
	this.instance_27.setTransform(742.5,480.45,0.5729,0.5729);
	new cjs.ButtonHelper(this.instance_27, 0, 1, 2, false, new lib._13Шкалачастоты_1(), 3);

	this.instance_28 = new lib._4Клавишапривода();
	this.instance_28.setTransform(927,504.35,0.5729,0.5729,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_28, 0, 1, 2, false, new lib._4Клавишапривода(), 3);

	this.instance_29 = new lib._6тумблеризмерениекалибровка();
	this.instance_29.setTransform(997.3,503.4,0.5729,0.5729,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.instance_29, 0, 1, 2, false, new lib._6тумблеризмерениекалибровка(), 3);

	this.instance_30 = new lib._5кнопкасеть();
	this.instance_30.setTransform(1001.4,436.9,0.5729,0.5729,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_30, 0, 1, 2, false, new lib._5кнопкасеть(), 3);

	this.instance_31 = new lib._1Ручкаизмерительногоконденсатора();
	this.instance_31.setTransform(928.65,459.25,0.5729,0.5729,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_31, 0, 1, 2, false, new lib._1Ручкаизмерительногоконденсатора(), 3);

	this.instance_32 = new lib._2Линейнаяшкалаизмерительногоконденсатора_1();
	this.instance_32.setTransform(741.35,442.85,0.5729,0.5729,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.instance_32, 0, 1, 2, false, new lib._2Линейнаяшкалаизмерительногоконденсатора_1(), 3);

	this.instance_33 = new lib.Стрелочныйприбордлядобротности();
	this.instance_33.setTransform(479.7,445.1,0.5729,0.5729);
	new cjs.ButtonHelper(this.instance_33, 0, 1, 2, false, new lib.Стрелочныйприбордлядобротности(), 3);

	this.instance_34 = new lib.Катушка();
	this.instance_34.setTransform(862.65,291.15,0.5729,0.5729,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance_34, 0, 1, 2, false, new lib.Катушка(), 3);

	this.instance_35 = new lib.Электроды_1();
	this.instance_35.setTransform(707.1,293.25,0.5729,0.5729);
	new cjs.ButtonHelper(this.instance_35, 0, 1, 2, false, new lib.Электроды_1(), 3);

	this.instance_36 = new lib.Экран();
	this.instance_36.setTransform(704.9,261.1,0.5729,0.5729,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.instance_36, 0, 1, 2, false, new lib.Экран(), 3);

	this.instance_37 = new lib.Головкавинта_1();
	this.instance_37.setTransform(696.5,49.15,0.5729,0.5729);
	new cjs.ButtonHelper(this.instance_37, 0, 1, 2, false, new lib.Головкавинта_1(), 3);

	this.instance_38 = new lib.box();
	this.instance_38.setTransform(237.95,414.25,0.5729,0.5729);
	new cjs.ButtonHelper(this.instance_38, 0, 1, 2, false, new lib.box(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).wait(1));

	// Слой_3
	this.instance_39 = new lib.Растровоеизображение2();
	this.instance_39.setTransform(0,1,0.3997,0.3026);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(550,310,552,327.1);
// library properties:
lib.properties = {
	id: 'F7C9A542000EBF4DAAFFC3085EAE5C24',
	width: 1100,
	height: 618,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ВОССТАНОВИТЬ_ргпнанпролджs_atlas_1.png?1634585946279", id:"ВОССТАНОВИТЬ_ргпнанпролджs_atlas_1"},
		{src:"sounds/Головкавинта_.mp3?1634585946384", id:"Головкавинта"},
		{src:"sounds/Коробка_.mp3?1634585946384", id:"Коробка_"},
		{src:"sounds/Шкаладляотсчётарасстояниямеждуэлектродами_.mp3?1634585946384", id:"Шкаладляотсчётарасстояниямеждуэлектродами"},
		{src:"sounds/_1Ручкаизмерительногоконденсатораснониуснойшкалой.mp3?1634585946384", id:"_1Ручкаизмерительногоконденсатораснониуснойшкалой"},
		{src:"sounds/_10Переключательродаизмерений.mp3?1634585946384", id:"_10Переключательродаизмерений"},
		{src:"sounds/_12Переключательподдиапазоновгенератора.mp3?1634585946384", id:"_12Переключательподдиапазоновгенератора"},
		{src:"sounds/_2Линейнаяшкалаизмерительногоконденсатора.mp3?1634585946384", id:"_2Линейнаяшкалаизмерительногоконденсатора"},
		{src:"sounds/_3Ручканастройкичастотыгенератора.mp3?1634585946384", id:"_3Ручканастройкичастотыгенератора"},
		{src:"sounds/_5Тумблерсеть.mp3?1634585946384", id:"_5Тумблерсеть"},
		{src:"sounds/_7ИзмерительныйприбордляотсчётадобротностиQ.mp3?1634585946384", id:"_7ИзмерительныйприбордляотсчётадобротностиQ"},
		{src:"sounds/_8РучкаустановкинуляДельтаQ.mp3?1634585946384", id:"_8РучкаустановкинуляДельтаQ"},
		{src:"sounds/_9Ручкавыполнениякалибровки.mp3?1634585946384", id:"_9Ручкавыполнениякалибровки"},
		{src:"sounds/_11ПереключательпределовQ.mp3?1634585946384", id:"_11ПереключательпределовQ"},
		{src:"sounds/_4Клавишавключенияэлектрическогоприводаручкиизмерительногоконденсатра.mp3?1634585946384", id:"_4Клавишавключенияэлектрическогоприводаручкиизмерительногоконденсатра"},
		{src:"sounds/Катушкаиндуктивности_.mp3?1634585946384", id:"Катушкаиндуктивности"},
		{src:"sounds/экран_.mp3?1634585946384", id:"экран"},
		{src:"sounds/_13Шкалачастоты.mp3?1634585946384", id:"_13Шкалачастоты"},
		{src:"sounds/_6Тумблеризмерениекалибровка.mp3?1634585946384", id:"_6Тумблеризмерениекалибровка"},
		{src:"sounds/Электроды_.mp3?1634585946384", id:"Электроды"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F7C9A542000EBF4DAAFFC3085EAE5C24'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;