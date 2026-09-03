# TechCraft Design System

This document is the visual contract for future TechCraft website work.

## Core principle

New features must extend the existing TechCraft language. Do not introduce an unrelated SaaS, corporate, glassmorphism-heavy, neon, or material-design system.

## Visual primitives

- Background: `#F4F6F8`
- Ink: `#111318`
- Primary blue: `#2563FF`
- Cultural red: `#C83A32`
- Cultural gold: `#D7A52A`
- White: `#FFFFFF`
- Typography: Inter/system sans with editorial display hierarchy
- UI icons: Lucide-style line icons
- Borders: thin, restrained, low-contrast
- Surfaces: translucent white glass where the existing interface uses glass
- Geometry: rounded technical panels plus diamond/Balochi-inspired geometry

## Motion

Motion should feel technical and deliberate: subtle hover movement, cursor response, progressive reveals, smooth scrolling, and restrained ambient animation. Avoid excessive spring/bounce effects or unrelated animation styles.

Respect `prefers-reduced-motion`.

## Cultural language

Balochi influence should remain subtle and structural rather than decorative tourism imagery. Use the established geometric Balochi mark, micro-patterns, and restrained red/gold accents as the primary cultural vocabulary.

## Interaction language

Existing patterns are preferred:

- command palette
- keyboard hints
- technical status labels
- hover/focus activation
- product/editor previews
- cursor-responsive effects
- thin progress indicators

## Content language

TechCraft should sound confident, concise, technical, and human. Prefer product/design language over generic agency claims.

Examples of the established tone:

- `We design digital futures.`
- `We don't just build software. We shape experiences.`
- `Context before concepts.`
- `Systems before screens.`
- `Quality before shortcuts.`

## Rule for future work

If a new component looks like it belongs to a different website, redesign the component before merging it. The goal is not to add more visual styles; it is to make the existing TechCraft system more capable.
