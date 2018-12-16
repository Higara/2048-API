// ES Modules syntax
import Unsplash from 'unsplash-js';

// require syntax
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
    applicationId: "{fb4c70b421cf15fba8f5a0deab0a6a23ed3825407ef7ee2a1437c4aebf51152c}",
    secret: "{cc47b2e8a84e85e0f620d17d70db7a02da03ba4a270191694dd8eb92fb77b2a7"},
    callbackUrl: "{urn:ietf:wg:oauth:2.0:oob}"
});