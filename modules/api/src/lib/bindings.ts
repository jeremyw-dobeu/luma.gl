// luma.gl, MIT license
import type Device from '../adapter/device';
import type Buffer from '../adapter/resources/buffer';
import {ShaderLayout} from '../adapter/types/shader-layout';
import UniformBlock from './uniform-block';

/** 
 * Manages all the bindings and uniforms for a pipeline 
 * Provides a simple `setUniforms()` API which can update uniform buffers
 * or set individual uniforms as appropriate.
 */
export default class Bindings {
  readonly device: Device;
  readonly layout: ShaderLayout;
  readonly uniformBuffers: Record<string, Buffer> = {};
  readonly uniformBlocks: Record<string, UniformBlock> = {};

  bindings: Record<string, any> = {};
  uniforms: Record<string, any> = {};

  constructor(device: Device, layout: ShaderLayout) {
    this.device = device;
    this.layout = layout;

    // Allocate uniform buffers and uniform blocks
    for (const binding of this.layout.bindings) {
      if (binding.type === 'uniform') {
        this.uniformBuffers[binding.name] = device.createBuffer({id: binding.name, byteLength: binding.minBindingSize});
        this.uniformBlocks[binding.name] = new UniformBlock(this.layout, binding.name);

        this.bindings[binding.name] = this.uniformBuffers[binding.name];
      }
    }
  }

  setBindings(bindings: Record<string, any>): void {
    Object.assign(this.bindings, bindings);
  }

  setUniforms(uniforms: Record<string, any>): void {
    for (const [name, uniformBlock] of Object.entries(this.uniformBlocks)) {
      uniformBlock.setUniforms(uniforms);
    }
    Object.assign(this.uniforms, uniforms);
  }

  updateUniformBuffers() {
    // TODO - check if changed
    for (const [name, uniformBlock] of Object.entries(this.uniformBlocks)) {
      const data = uniformBlock.getData();
      this.uniformBuffers[name].write(new Uint8Array(data));
    }
  }

  getBindings() {
    return this.bindings;
  }

  getUniforms() {
    // TODO - return only changed uniforms
    return this.uniforms;
  }
}

