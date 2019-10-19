/*
 * Copyright (C) 2015-2018 CloudBeat Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
import { Subject } from 'rxjs';

let fileChildrenLoadedSubject = new Subject();
let fileRenamedSubject = new Subject();

export default {
    'FILE.CHILDREN.LOADED': fileChildrenLoadedSubject,
    'FILE.RENAMED': fileRenamedSubject,
};
