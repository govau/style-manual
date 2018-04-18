---
layout: component/code-demo
example: examples/example-success
headline: Success
code:
  - HTML: |
      <!--
        Light:      <div role="alert" class="au-page-alerts au-page-alerts--success">
        Light Alt:  <div role="alert" class="au-page-alerts au-page-alerts--success au-page-alerts--alt">
        Dark:       <div role="alert" class="au-body au-body--dark au-page-alerts au-page-alerts--success au-page-alerts--dark >
        Dark Alt:   <div role="alert" class="au-body au-body--dark au-body--alt au-page-alerts au-page-alerts--success au-page-alerts--dark au-page-alerts--alt">
      -->

      <div role="alert" class="au-body au-page-alerts au-page-alerts--success">
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </div>
  - React: |
      /*
        Light:      <AUpageAlert as='success'>
        Light Alt:  <AUpageAlert as='success' alt>
        Dark:       <AUpageAlert as='success' dark>
        Dark Alt:   <AUpageAlert as='success' dark alt>
      */

      import AUpageAlert from '@gov.au/page-alerts';

      <AUpageAlert as='success'>
        <h3>Alert title</h3>
        <p>Alert Content</p>
      </AUpageAlert>
---

The success page alert is used for notifying the user that a task is fully completed.
