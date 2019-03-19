---
id: introduction
title: Introduction
---

> TODO: Introduction.

## Folder Layout

```yaml
- src/
    - index.tsx # app entry point
    - Components/
        - Atoms/
            - ComponentName/
                - index.ts
                - ComponentName.tsx
                - ComponentName.test.tsx
                - ComponentName.story.tsx
                - _ComponentName.module.scss
        - Molecules/
        - Organisms/
    - Containers/
        - ContainerName/
            - index.ts
            - ContainerName.tsx
    - Domain/
        # put domain specific stuff in here (types, DTOs, services, ect)
    - Redux/
        - configureStore.ts
        - Store/
            - index.ts
            # substores, e.g.:
            - Data/
            - User/
    - Style/
        # this section is different everytime as we experiment 
        # to find _the best_ way for us to organize styling
        - _Variables.scss
        - _Layout.scss
        - _Theme.scss
```