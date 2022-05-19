// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderItem } from '../other-page/render-item.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li id="container"><p id="item">beans</p><p id="number">1</p></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ item: 'beans', quantity: '1' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
