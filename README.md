# react-shake-it

A very, very cool library for making things shake, move, hide and sway

## Props rundown

| prop            | required? | type               | default |
|-----------------|-----------|--------------------|---------|
| `children`      | +         | `ReactElement`     |         |
| `active`        |           | `boolean`          |         |
| `horizontal`    |           | `number \| string` |         |
| `vertical`      |           | `number \| string` |         |
| `rotation`      |           | `number \| string` |         |
| `scale`         |           | `string`           |         |
| `opacity`       |           | `string`           |         |
| `duration`      |           | `number \| string` |         |
| `delay`         |           | `number \| string` |         |
| `iteratons`     |           | `string`           |         |
| `precision`     |           | `number`           |         |
| `interpolateFn` |           | `IInterpolateFn`   |         |



## Props details


### `active`
Defines, whether the animation should be played. Setting this to `false` will return an empty `<div>`.

### `horizontal`
Defines min and max horizontal translation of the animated component. Can be either:
 - An integer. This defaults to pixels, and positive and negative values as boundaries.
 - A string consisting of an integer and a unit (i.e. `20rem`). As above, negative value is used as a lower boundary.
 - A string consisting of both boundaries (i.e. `-20px 30px`).

### `vertical`
Defines min and max vertical translation of the animated component. Can be either:
 - An integer. This defaults to pixels, and positive and negative values as boundaries.
 - A string consisting of an integer and a unit (i.e. `10rem`). As above, negative value is used as a lower boundary.
 - A string consisting of both boundaries (i.e. `-10px 150px`).

### `rotation`
Defines min and max rotation of the animated component. Can be either:
 - An integer. This defaults to degrees, and positive and negative values as boundaries.
 - A string consisting of an integer and a unit (i.e. `0.1turn`). As above, negative value is used as a lower boundary.
 - A string consisting of both boundaries (i.e. `-5deg 3deg`).

### `scale`
Defines min and max scale of the animated component. Consisits of a string of 2 numbers (i.e. `0.9 1.1`) being respectively min and max value.

### `opacity`
Defines min and max opacity of the animated component. Consisits of a string of 2 numbers (i.e. `0.9 1.1`) being respectively min and max value.

### `duration`
Defines time of the animation. Can be either:
 - An integer. Defaults to `ms`.
 - A string consisting of an integer and a unit (i.e. `1s`).

### `delay`
Time between activating the animaiton, and animation actually playing.

### `iterations`
Number of iterations to play on activation.

### `precision`
Length of 1 keyframe (for example `0.2` means keyframes every `20%`).

### `interpolateFn`
Function (`(progress: number) => number`) used to create values for the animation. Input and output values are between `0.0` and `1.0`.



