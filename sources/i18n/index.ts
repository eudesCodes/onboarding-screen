/*
 Copyright (c) 2020 - 2021 https://eudes.codes/
 @author: Eudes Evrard BOBBOH - EBO
 @country: France
 @email: evrard@eudes.codes
 @website: https://eudes.codes/

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/

import i18next from 'i18next';
import { en } from '_locale.json';

i18next.init({
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: 'en',
    resources: {
        en: {
            translation: en,
        },
    },
});

export default i18next;
