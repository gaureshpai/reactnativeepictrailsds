---
name: 🚀 Feature request
description: Suggest an idea or enhancement for this project.
labels: [enhancement]
body:
  - type: markdown
    attributes:
      value: |
        # Feature Request

        👋 Thanks for suggesting a feature! 

        **Before submitting, please check the following:**
        - 🔍 [Search existing issues](https://github.com/gaureshpai/reactnativeepictrailsds/issues) to ensure this request hasn’t been made.
        - 📖 Read the [contributing guidelines](https://github.com/gaureshpai/reactnativeepictrailsds/blob/main/CONTRIBUTING.md).
  
  - type: textarea
    id: problem-statement
    attributes:
      label: Problem statement
      description: |
        Is your feature request related to a problem? 
        Describe what issue or pain point this feature aims to solve.
      placeholder: "I'm always frustrated when..."
    validations:
      required: true

  - type: textarea
    id: proposed-solution
    attributes:
      label: Proposed solution
      description: |
        Provide a **clear and concise** description of what you want to happen.
      placeholder: "A possible solution would be..."
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives considered
      description: |
        Have you considered any alternative approaches?
        If so, explain why they may or may not work.
      placeholder: "Another approach could be..."
    validations:
      required: false

  - type: textarea
    id: additional-context
    attributes:
      label: Additional context
      description: |
        Add any extra details, links, or screenshots that might help understand the request.
