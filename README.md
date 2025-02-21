# React 18 useEffect Warning: Logging State Variables

This repository demonstrates a common warning encountered when upgrading to React 18 (and later versions) related to logging state variables within the dependency array of the `useEffect` hook. 

## Problem

Logging a state variable directly within the useEffect's dependency array can trigger a warning. React may perform unnecessary re-renders due to the state variable being referenced, even if the value isn't directly used for calculations or other logic within `useEffect`. 

## Solution

To fix this, avoid directly logging the state variable within the dependency array.  If logging is required for debugging purposes, do so conditionally outside of the dependency array itself.
