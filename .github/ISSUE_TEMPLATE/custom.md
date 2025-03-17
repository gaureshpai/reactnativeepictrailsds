---
name: Custom issue template
about: Describe this issue template's purpose here.
title: ''
labels: ''
assignees: ''
---

name: 🐛 Bug report
description: Report a reproducible bug or regression in this library.
labels: [bug]
body:
  - type: markdown
    attributes:
      value: |
        # Bug Report

        👋 Hi! Thanks for taking the time to submit an issue.

        **Please ensure you provide all required information before submitting ❗**
        *(Issues with missing details may be closed automatically.)*

        📌 **Helpful Links:**
        - 📖 [React Native Releases & Support](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md)
        - 🔎 [Check for existing issues](https://github.com/gaureshpai/reactnativeepictrailsds/issues)
        - 📚 [Documentation](https://github.com/gaureshpai/reactnativeepictrailsds#readme)
        - 🚀 [Contributing Guidelines](https://github.com/gaureshpai/reactnativeepictrailsds/blob/main/CONTRIBUTING.md)

  - type: checkboxes
    attributes:
      label: Pre-issue checklist
      description: Please confirm you have completed these steps before submitting the issue.
      options:
        - label: I tested using the latest version of the library to ensure the issue still exists.
          required: true
        - label: I am using a [supported version](https://github.com/reactwg/react-native-releases/blob/main/docs/support.md) of React Native.
          required: true
        - label: I have searched the [existing issues](https://github.com/gaureshpai/reactnativeepictrailsds/issues) and did not find a similar report.
          required: true

  - type: textarea
    id: summary
    attributes:
      label: Bug summary
      description: |
        Provide a **clear and concise description** of the issue.
        You can also attach screenshots, error messages, stack traces, or GIFs for better clarity.
    validations:
      required: true

  - type: input
    id: library-version
    attributes:
      label: Library version
      description: What version of the library are you using? (Check your package.json)
      placeholder: "e.g., 0.0.1"
    validations:
      required: true

  - type: textarea
    id: react-native-info
    attributes:
      label: Environment info
      description: Run the following command in your terminal and paste the results here:
      value: |
        ```sh
        npx react-native info
        ```
      render: shell
    validations:
      required: true

  - type: textarea
    id: steps-to-reproduce
    attributes:
      label: Steps to reproduce
      description: |
        Provide a **detailed step-by-step guide** on how to reproduce the issue.

        Example:
        1. Install the package using `npm install reactnativeepictrailsds`
        2. Import a component like `<Button />`
        3. Run the app on a simulator or physical device
        4. Observe the error message in the logs
    validations:
      required: true

  - type: textarea
    id: expected-behavior
    attributes:
      label: Expected behavior
      description: Describe what you **expected to happen** instead of the issue.
    validations:
      required: true

  - type: input
    id: reproducible-example
    attributes:
      label: Reproducible example repository
      description: Provide a link to a **GitHub repository** containing a minimal, reproducible example.
      placeholder: "e.g., https://github.com/your-repo/example"
    validations:
      required: true

  - type: textarea
    id: additional-context
    attributes:
      label: Additional context
      description: |
        Add any **extra details** that may help us debug this issue.
        (e.g., logs, package versions, specific device details)
