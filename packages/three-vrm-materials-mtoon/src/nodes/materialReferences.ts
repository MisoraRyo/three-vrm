import * as THREE from 'three/webgpu';
import {
  materialReference,
  textureReference,
  uniform,
} from 'three/nodes';

//　export const refColor = THREE.materialReference('color', 'color');
// export const refMap = THREE.materialReference('map', 'texture');
// export const refNormalMap = THREE.materialReference('normalMap', 'texture');
// export const refNormalScale = THREE.materialReference('normalScale', 'vec2');
// export const refEmissive = THREE.materialReference('emissive', 'color');
// export const refEmissiveIntensity = THREE.materialReference('emissiveIntensity', 'float');
// export const refEmissiveMap = THREE.materialReference('emissiveMap', 'texture');

// export const refShadeColorFactor = THREE.materialReference('shadeColorFactor', 'color');
// export const refShadingShiftFactor = THREE.materialReference('shadingShiftFactor', 'float');
// export const refShadeMultiplyTexture = THREE.materialReference('shadeMultiplyTexture', 'texture');
// export const refShadeMultiplyTextureScale = THREE.materialReference('shadeMultiplyTextureScale', 'float');
// export const refShadingToonyFactor = THREE.materialReference('shadingToonyFactor', 'float');
// export const refRimLightingMixFactor = THREE.materialReference('rimLightingMixFactor', 'float');
// export const refRimMultiplyTexture = THREE.materialReference('rimMultiplyTexture', 'texture');
// export const refMatcapFactor = THREE.materialReference('matcapFactor', 'color');
// export const refMatcapTexture = THREE.materialReference('matcapTexture', 'texture');
// export const refParametricRimColorFactor = THREE.materialReference('parametricRimColorFactor', 'color');
// export const refParametricRimLiftFactor = THREE.materialReference('parametricRimLiftFactor', 'float');
// export const refParametricRimFresnelPowerFactor = THREE.materialReference('parametricRimFresnelPowerFactor', 'float');
// export const refOutlineWidthMultiplyTexture = THREE.materialReference('outlineWidthMultiplyTexture', 'texture');
// export const refOutlineWidthFactor = THREE.materialReference('outlineWidthFactor', 'float');
// export const refOutlineColorFactor = THREE.materialReference('outlineColorFactor', 'color');
// export const refOutlineLightingMixFactor = THREE.materialReference('outlineLightingMixFactor', 'float');
// export const refUVAnimationMaskTexture = THREE.materialReference('uvAnimationMaskTexture', 'texture');

// export const refUVAnimationScrollXOffset = THREE.materialReference('uvAnimationScrollXOffset', 'float');
// export const refUVAnimationScrollYOffset = THREE.materialReference('uvAnimationScrollYOffset', 'float');
// export const refUVAnimationRotationPhase = THREE.materialReference('uvAnimationRotationPhase', 'float');

export const refColor = materialReference('color', 'color');
export const refMap = textureReference('map', 'texture');
export const refNormalMap = textureReference('normalMap', 'texture');
export const refNormalScale = uniform('normalScale', 'vec2');
export const refEmissive = materialReference('emissive', 'color');
export const refEmissiveIntensity = uniform('emissiveIntensity', 'float');
export const refEmissiveMap = textureReference('emissiveMap', 'texture');

// 以下も同様に修正
export const refShadeColorFactor = materialReference('shadeColorFactor', 'color');
export const refShadingShiftFactor = uniform('shadingShiftFactor', 'float');
export const refShadeMultiplyTexture = textureReference('shadeMultiplyTexture', 'texture');
export const refShadeMultiplyTextureScale = uniform('shadeMultiplyTextureScale', 'float');
export const refShadingToonyFactor = uniform('shadingToonyFactor', 'float');
export const refRimLightingMixFactor = uniform('rimLightingMixFactor', 'float');
export const refRimMultiplyTexture = textureReference('rimMultiplyTexture', 'texture');
export const refMatcapFactor = materialReference('matcapFactor', 'color');
export const refMatcapTexture = textureReference('matcapTexture', 'texture');
export const refParametricRimColorFactor = materialReference('parametricRimColorFactor', 'color');
export const refParametricRimLiftFactor = uniform('parametricRimLiftFactor', 'float');
export const refParametricRimFresnelPowerFactor = uniform('parametricRimFresnelPowerFactor', 'float');
export const refOutlineWidthMultiplyTexture = textureReference('outlineWidthMultiplyTexture', 'texture');
export const refOutlineWidthFactor = uniform('outlineWidthFactor', 'float');
export const refOutlineColorFactor = materialReference('outlineColorFactor', 'color');
export const refOutlineLightingMixFactor = uniform('outlineLightingMixFactor', 'float');
export const refUVAnimationMaskTexture = textureReference('uvAnimationMaskTexture', 'texture');
export const refUVAnimationScrollXOffset = uniform('uvAnimationScrollXOffset', 'float');
export const refUVAnimationScrollYOffset = uniform('uvAnimationScrollYOffset', 'float');
export const refUVAnimationRotationPhase = uniform('uvAnimationRotationPhase', 'float');
