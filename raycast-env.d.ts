/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Group Projects - Group saved projects by tag */
  "groupProjectsByTag": boolean,
  /** Hide Projects - Hide projects without tags */
  "hideProjectsWithoutTag": boolean,
  /** Hide Projects - Hide projects whose enabled flag is false */
  "hideProjectsNotEnabled": boolean,
  /** VS Code-compatible App - Used only to locate Project Manager storage when Projects Location is blank */
  "vscodeApp"?: import("@raycast/api").Application,
  /** Projects Location - Set this only if the VS Code Project Manager extension stores projects in a custom directory */
  "projectManagerDataPath"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-project-manager-projects` command */
  export type SearchProjectManagerProjects = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-project-manager-projects` command */
  export type SearchProjectManagerProjects = {}
}

