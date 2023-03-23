install:
	npm ci;
brain-games:
	node bin/brain-games.js;
brain-even:	
	node bin/brain-even.js;
brain-calc:
	node bin/brain-calc.js;
brain-gcd:
	node bin/brain-gcd;
brain-progression:
	node bin/brain-progression;
brain-prime:
	node bin/brain-prime;
publish:
	npm publish --dry-run;
lint:
	npx eslint .;