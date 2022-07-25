/*
 * Copyright 2021 KubeClipper Authors.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { ConfirmAction } from 'containers/Action';
import { rootStore } from 'stores';

const { templatesStore } = rootStore;
export default class Delete extends ConfirmAction {
  get id() {
    return 'delete';
  }

  get title() {
    return t('Delete Template');
  }

  get buttonType() {
    return 'danger';
  }

  get buttonText() {
    return t('Delete');
  }

  get actionName() {
    return t('delete Template');
  }

  policy = 'clusters:delete';

  onSubmit = (item) => {
    const { id } = item || this.item;
    return templatesStore.delete({ id });
  };
}
