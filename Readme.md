# MySpice

*[Jekyll](https://jekyllrb.com/) powered static version of MySpice*

This repository deploys to https://alexgb.github.io/myspice-static/.

## Adding Recipes

Create a new recipe [here](https://github.com/alexgb/myspice-static/new/main/_recipes) using the template example recipe below. Save using underscored title as file name with `.md` extension, e.g. `no_knead_bread.md`

```
---
title: No-Knead Bread
subtitle: The recipe that started the modern bread movement
description: This recipe equires no kneading, no special ingredients, and no special equipment or techniques. And it takes very little effort — only time. You will need 24 hours to create the bread.
ingredients:
  - 3⅓ cups/430 grams all-purpose or bread flour, plus more for dusting
  - Generous ¼ teaspoon/1 gram instant yeast
  - 2 teaspoons/8 grams kosher salt
  - Cornmeal or wheat bran, as needed
directions: |-
  Step 1\
  In a large bowl combine flour, yeast and salt. Add 1½ cups/345 grams water and stir until blended; dough will be shaggy and sticky. Cover bowl with plastic wrap. Let dough rest at least 12 hours, preferably about 18, at warm room temperature, about 70 degrees.

  Step 2\
  Dough is ready when its surface is dotted with bubbles. Lightly flour a work surface and place dough on it; sprinkle it with a little more flour and fold it over on itself once or twice. Cover loosely with plastic wrap and let rest about 15 minutes.

  Step 3\
  Using just enough flour to keep dough from sticking to work surface or to your fingers, gently and quickly shape dough into a ball. Generously coat a cotton towel (not terry cloth) with flour, wheat bran or cornmeal; put dough seam side down on towel and dust with more flour, bran or cornmeal. Cover with another cotton towel and let rise for about 2 hours. When it is ready, dough will be more than double in size and will not readily spring back when poked with a finger.

  Step 4\
  At least a half-hour before dough is ready, heat oven to 450 degrees. Put a 6- to 8-quart heavy covered pot (cast iron, enamel, Pyrex or ceramic) in oven as it heats. When dough is ready, carefully remove pot from oven. Slide your hand under towel and turn dough over into pot, seam side up; it may look like a mess, but that is OK. Shake pan once or twice if dough is unevenly distributed; it will straighten out as it bakes. Cover with lid and bake 30 minutes, then remove lid and bake another 15 to 30 minutes, until loaf is beautifully browned. Cool on a rack.
servings: "4"
author_name: Mark Bittman
---
```

## Local Development

Run development server using the following command:

```
bundle exec jekyll serve --baseurl ''
```
