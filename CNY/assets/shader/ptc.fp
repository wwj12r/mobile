uniform vec3 color;
uniform sampler2D texture;

varying vec3 vColor;
varying float vRot;
varying float vAlpha;

void main() {

  float md = 0.5;
  float px = gl_PointCoord.x;
  float py = gl_PointCoord.y;
  
  vec2 cRot = vec2(cos(vRot)*(px-md)+sin(vRot)*(py-md)+md, cos(vRot)*(py-md)-sin(vRot)*(px-md)+md); // vec2(px, py) //无旋转
  vec4 rotTexture = texture2D( texture,  cRot );
  gl_FragColor = vec4( color * vColor, vAlpha ) * rotTexture;
}