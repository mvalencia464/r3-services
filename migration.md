# R3 Services Rebrand Plan (Stage-Based)

## Goals

- Reposition the site from residential roofing to **R3 Services** (HVAC + Refrigeration + Commercial Kitchen Equipment + Preventive Maintenance).
- Apply new visual identity anchored on `#E31E24` + near-black neutrals across shared styles and component surfaces.
- Replace roofing imagery/content with the provided R3 media set and business information (owner: Nathaniel Roddy).
- Deliver Stage 1 as **homepage + core conversion pages** (`/`, `/services/[slug]`, `/contact`, `/service-areas`) with consistent messaging and CTA paths.

## Current State Findings

- Primary content source is centralized in `[/Users/mauriciovalencia/Downloads/r3-services-main/src/config/site.ts](/Users/mauriciovalencia/Downloads/r3-services-main/src/config/site.ts)`, which still contains roofing business identity, copy, services, SEO, and map metadata.
- Global visual system in `[/Users/mauriciovalencia/Downloads/r3-services-main/src/styles/global.css](/Users/mauriciovalencia/Downloads/r3-services-main/src/styles/global.css)` is a blue/orange dark theme; needs red/charcoal conversion.
- Roofing language appears across homepage and core components/pages (`src/components/`*, `src/pages/`*), including legacy pages like `insurance-claims` and `financing` that likely need later-phase repurposing.
- Image inventory is ready via `[/Users/mauriciovalencia/Downloads/r3-services-main/images.md](/Users/mauriciovalencia/Downloads/r3-services-main/images.md)` + mapping metadata in `[/Users/mauriciovalencia/Downloads/r3-services-main/image_analysis.json](/Users/mauriciovalencia/Downloads/r3-services-main/image_analysis.json)`.
- Service/copy direction is defined in `[/Users/mauriciovalencia/Downloads/r3-services-main/services.md](/Users/mauriciovalencia/Downloads/r3-services-main/services.md)`.

## Stage 1 (Implementation Pass)

- Update `SITE` config to R3 identity:
  - Business name, tagline, contact info, owner attribution (Nathaniel Roddy), SEO metadata, footer/legal, social placeholders.
  - Replace roofing-specific services with 4 service pillars + granular subservice entries appropriate for `/services/[slug]` pages.
  - Refresh nav labels/targets for commercial audience.
- Rebrand visual tokens and shared CSS:
  - Set accent system to `#E31E24` + near-black palette.
  - Adjust interactive states (hover/focus), cards, borders, and section label treatments for adequate contrast.
- Rewrite homepage section copy/components for commercial service positioning:
  - Hero, services grid, about, testimonials/reviews, CTA banner, FAQ, contact module.
  - Remove roof/storm claim language and replace with uptime, food safety, and operational continuity messaging.
- Swap core imagery references:
  - Map hero/section/service imagery to the R3 assets from `images.md`, guided by `image_analysis.json` (HVAC, refrigeration, kitchen equipment, maintenance contexts).
- Update core conversion pages:
  - `/services/[slug]`: service-specific HVAC/refrigeration/equipment diagnostics language.
  - `/contact`: service request framing for restaurants/light commercial, updated contact/business details.
  - `/service-areas`: adapt region blurbs to commercial service coverage language.

## Stage 2 (Secondary Pages + Content Sweep)

- Convert legacy roofing pages to R3-relevant utility pages or merge/remove as needed:
  - `insurance-claims`, `financing`, `library`, `hiring`, `alt`, `thanks`.
- Standardize legal/policy pages (`terms`, `policy`) with new business identity.
- Perform full-text QA sweep for roofing leftovers and inconsistent tone.

## Stage 3 (Polish + Conversion Optimization)

- Tighten conversion architecture (CTA hierarchy, sticky contact actions, form microcopy).
- Improve local SEO structure (metadata pass, internal links by service area and service pillar).
- Run final visual QA for contrast/accessibility and responsive image fit.

## Image Mapping Strategy

- Create an image usage matrix in code comments/config-level constants (hero, service cards, featured project, gallery/testimonial backgrounds).
- Prioritize clear service-context images:
  - HVAC RTUs/split systems/filters for HVAC sections.
  - Walk-in and controller imagery for refrigeration sections.
  - Conveyor ovens, igniters, motors for kitchen equipment sections.
  - Dirty coils/filters/components for preventive maintenance narrative.
- Avoid non-core imagery (e.g., plumbing/toilet photo) in primary conversion sections.

## Validation and Acceptance Criteria

- Stage 1 is complete when:
  - No roofing-specific terms remain in homepage/core conversion pages.
  - All core CTAs and contact data reflect R3 business details.
  - Brand palette is consistently red/near-black across shared UI.
  - Service pages and homepage messaging align with full R3 service scope.
  - Core page imagery is fully sourced from the provided R3 assets.

## Execution Notes

- Work config-first (update `site.ts` first) to leverage existing component auto-binding and reduce duplicated edits.
- Then patch component/page-level hardcoded roofing copy where config indirection is not used.
- Run a final content grep pass for terms like `roof`, `roofing`, `storm`, and stale company names before sign-off.