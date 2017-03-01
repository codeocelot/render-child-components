This repo demonstrates the importance of strictly limiting the quantity
of props passed to child components.  This can often arise in a
collection situation.  In general, it is better to pass only the individual elements to be rendered to child components.

This turns out to be more performant (as this repo demonstrates) as well
as encouraging more cleanly separated and ultimately re-useable
components.
