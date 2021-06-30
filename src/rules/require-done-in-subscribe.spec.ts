import { RuleTester } from "eslint";
import { rule } from "./require-done-in-subscribe";

const tester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: "module"
    }
});
const errorMessage = "Require done callback inside subscribe block.";

tester.run("require-done-in-subscribe", rule, {
    valid: [
        { code: `of().subscribe(() => {
            done();
        })` },
        { code: `of().pipe().subscribe(() => {
            done();
        })` },
        { code: `const a = of().pipe().subscribe(() => {
            done();
        })` },
        { code: `const a = of().pipe().subscribe({
            next: () => { done(); },
            error: (err) => {},
            complete: () => {}
        })` }
    ],
    invalid: [
        {
            code: `of().subscribe(() => {

        })`,
            errors: [{ message: errorMessage }]
        },
        {
            code: `of().pipe().subscribe(() => {

        })`,
            errors: [{ message: errorMessage }]
        },
        {
            code: `const a = of().pipe().subscribe(() => {

        })`,
            errors: [{ message: errorMessage }]
        }
    ],
});


