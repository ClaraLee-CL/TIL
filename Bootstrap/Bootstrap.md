# 👾Boostrp

## Spacing

> Natation <br>
> • {property}{sides}-{size} for xs <br>
> • {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl.

> Property is one of : <br>
> • m - for classes that set margin <br>
> • p - for classes that set padding <br>

> Sides is one of : <br>
> • t - set margint-top or padding-top <br>
> • b - set margint-bottom or padding-bottom <br>
> • l - set margint-left or padding-left <br>
> • r - set margint-right or padding-right <br>
> • x - set _-left and _-right <br>
> • y - set _-top and _-bottom <br>

## .navbar

Require a wrapping .navbar with .navbar-expand{-sm|-md|-lg-|-xl} for responsive collapsing.

## .callapse

Toggle the visibility of content across your project with a few classes and JavaScript plugins.

```ts
⁃ .collapse hides content
⁃ .collapsing is applied during transitions
⁃ .collapse.show shows content
```

you can use a link with the href attribute, or a button with the data-target attribute. In both cases, the data-toggle="collapse" is required.

## Display

Quickly and responsively toggle the display value of components and more with display utilities. Includes support for some of the more common values, as well as some estras for controlling display when printing.

> Natation <br>
> • .d-{value} xs <br>
> • .d-{breakoint}-{value} for sm, md, lg and xl

> value <br>
> • none <br>
> • inline / inline-block / block <br>
> • table / table-cell / table-row <br>
> • flex / inline-flex <br>

## Justify content

Use justify content utilities on flexbox containers to changes the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column).

> Choose from start (browser default), end, center, between, or around.

## No gutters

The gutters between columns in predefined grid classes can be removed with .no-gutters. This removes the negative margins from .row and the horizontal padding from all immediate children columns.

```ts
.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
```
