import { Module } from "@nestjs/common";
import { FileManagerService } from "src/global-services/file-manager/file-manager.service";

import { MiniModule } from "./mini/mini.module";
import { WordsModule } from "./words/words.module";

/**
 * @description - This is the primary module for all projects, to be instantiated at whatever port. Any child module goes in the imports: [] section of the Module decorator.
 */
 @Module({
  imports: [WordsModule, MiniModule],
})
export class Henhouse {}