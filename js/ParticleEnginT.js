/**
* @author Lee Stemkoski   http://www.adelphi.edu/~stemkoski/
*/
var mySize1 = 4;
var mySize2 = 4;
/* 
	Particle Engine options:
	
	positionBase   : new THREE.Vector3(),
	positionStyle : Type.CUBE or Type.SPHERE,
	// for Type.CUBE
	positionSpread  : new THREE.Vector3(),
	// for Type.SPHERE
	positionRadius  : 10,
	
	velocityStyle : Type.CUBE or Type.SPHERE,
	// for Type.CUBE
	velocityBase       : new THREE.Vector3(),
	velocitySpread     : new THREE.Vector3(), 
	// for Type.SPHERE
	speedBase   : 20,
	speedSpread : 10,
		
	accelerationBase   : new THREE.Vector3(),
	accelerationSpread : new THREE.Vector3(),
		
	particleTexture : THREE.ImageUtils.loadTexture( 'images/star.png' ),
		
	// rotation of image used for particles
	angleBase               : 0,
	angleSpread             : 0,
	angleVelocityBase       : 0,
	angleVelocitySpread     : 0,
	angleAccelerationBase   : 0,
	angleAccelerationSpread : 0,
		
	// size, color, opacity 
	//   for static  values, use base/spread
	//   for dynamic values, use Tween
	//   (non-empty Tween takes precedence)
	sizeBase   : 20.0,
	sizeSpread : 5.0,
	sizeTween  : new Tween( [0, 1], [1, 20] ),
			
	// colors stored in Vector3 in H,S,L format
	colorBase   : new THREE.Vector3(0.0, 1.0, 0.5),
	colorSpread : new THREE.Vector3(0,0,0),
	colorTween  : new Tween( [0.5, 2], [ new THREE.Vector3(0, 1, 0.5), new THREE.Vector3(1, 1, 0.5) ] ),
	opacityBase   : 1,
	opacitySpread : 0,
	opacityTween  : new Tween( [2, 3], [1, 0] ),
	
	blendStyle    : THREE.NormalBlending (default), THREE.AdditiveBlending
	particlesPerSecond : 200,
	particleDeathAge   : 2.0,		
	emitterDeathAge    : 60	
*/

Clues =
{

	firework :
	{
		positionStyle  : Type.SPHERE,
		positionBase   : new THREE.Vector3( 0, 0, 0 ),
		positionRadius : 10,
		
		velocityStyle  : Type.SPHERE,
		speedBase      : 90,
		speedSpread    : 10,
		
		accelerationBase : new THREE.Vector3( 0, 0, 0 ),
		
		particleTexture : THREE.ImageUtils.loadTexture( 'images/spark.png' ),
		
		sizeTween    : new Tween( [0.5, 0.7, 1.3], [5, 40, 1] ),
		opacityTween : new Tween( [0.2, 0.7, 2.5], [0.75, 1, 0] ),
		colorTween   : new Tween( [0.4, 0.8, 1.0], [ new THREE.Vector3(0,1,1), new THREE.Vector3(0,1,0.6), new THREE.Vector3(0.8, 1, 0.6) ] ),
		blendStyle   : THREE.AdditiveBlending,  
		
		particlesPerSecond : 3000,
		particleDeathAge   : 4.5,		
		emitterDeathAge    : 1
	},

	firework2 :
	{
		positionStyle  : Type.SPHERE,
		positionBase   : new THREE.Vector3( 0, 0, 0 ),
		positionRadius : 10,
		
		velocityStyle  : Type.SPHERE,
		speedBase      : 90,
		speedSpread    : 10,
		
		accelerationBase : new THREE.Vector3( 0, 0, 0 ),
		
		particleTexture : THREE.ImageUtils.loadTexture( 'images/spark.png' ),
		
		sizeTween    : new Tween( [0.5, 0.7, 1.3], [5, 40, 1] ),
		opacityTween : new Tween( [0.2, 0.7, 2.5], [0.75, 1, 0] ),
		colorTween   : new Tween( [0.4, 0.8, 1.0], [ new THREE.Vector3(0,1,1), new THREE.Vector3(0,1,0.6), new THREE.Vector3(0.8, 1, 0.6) ] ),
		blendStyle   : THREE.AdditiveBlending,  
		
		particlesPerSecond : 3000,
		particleDeathAge   : 4.5,		
		emitterDeathAge    : 1
	},
	
}