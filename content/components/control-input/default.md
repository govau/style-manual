---
layout: component/code-demo
example: examples/example-default
headline: Checkbox
code:
  - HTML: |
      <label class="au-control-input">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex">
        <span class="au-control-input__text">Phone</span>
      </label>
      <label class="au-control-input">
        <input class="au-control-input__input" type="checkbox" name="checkbox-ex" checked>
        <span class="au-control-input__text">Tablet</span>
      </label>
  - React: |
      import { AUcheckbox } from '@gov.au/control-input';

      <AUcheckbox label="Phone" name="checkbox-ex" />
      <AUcheckbox label="Tablet" name="checkbox-ex" checked />
---

Check boxes allow users to select one or more items.
