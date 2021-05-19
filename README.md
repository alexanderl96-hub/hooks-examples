# Hooks Exercise

Let's refactor some class components using hooks!
You'll recognize this code from a portion of the react router lab.

# Exercise 1

Refactor `DogRandom` so that:

1. It is a functional component
1. It uses `useState` to setup component state
1. It uses `useEffect` in place of `componentDidMount`. This effect should only run once when the component mounts.

# BONUS

Refactor `DogRandomNum` so that:

1. It is a functional component
1. It uses `useState` to setup component state
1. It uses `useEffect` in place of `componentDidMount`. This effect should only run once when the component mounts.
1. It uses the `useParams` hook from the react router library (instead of `props.match.params`) to grab information about the current route.
