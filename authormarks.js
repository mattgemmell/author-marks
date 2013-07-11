/* ==========================================================
 * AuthorMarks Script
 * ==========================================================
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
(function (global) {
    "use strict";

    /* BUILT-IN EXTENSIONS
     * =================== */

    // Add Event
    // ---------
    // Cross browser event binding
    //
    Object.prototype.addEvent = function(event, callback) {
        if (this.addEventListener) {
            this.addEventListener(event, callback, false);
        } else if (this.attachEvent) {
            this.attachEvent('on' + event, callback);
        }
    };

    // Generic ForEach Method
    // ----------------------
    // Can be attached to the prototype of any object with
    // a `.length` property to provide an `Array.prototype.forEach` like
    // method
    //
    var forEachMethod = function(callback) {
        for(var i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    };

    // Attach `forEach` method to NodeList (if it exists)
    // WebKit
    //
    if (typeof(NodeList) !== 'undefined') {
        NodeList.prototype.forEach = forEachMethod;
    }

    // Attach `forEach` method to HTMLCollection
    // Mozilla
    //
    if (typeof(HTMLCollection) !== 'undefined') {
        HTMLCollection.prototype.forEach = forEachMethod;
    }

    /* AUTHORMARKS CLASS DEFINITION
     * ============================ */

    // Constructor
    // -----------
    // Initialise variables and run initialiser
    //
    function AuthorMarks () {
        this.author_marks_highlighted = false;
        this.highlighted_class = 'marks-highlighted';

        this.toggle_links = document.getElementsByClassName('toggle-marks-highlight');
        this.author_marks = document.getElementsByClassName('author-mark');

        this.init();

        return this;
    }

    // Initialiser
    // -----------
    // Initial event bindings
    //
    AuthorMarks.prototype.init = function () {
        var _that = this;
        this.toggle_links.forEach(function (toggleLink) {
            toggleLink.addEvent('click', function (event) { _that.toggleAuthorMarks(event); });
        });
    };

    // Toggle Author Marks
    // -------------------
    // If author marks are on, turn them off, and visa-versa
    // Can be called by `window.AuthorMarks.toggleAuthorMarks();`
    //
    AuthorMarks.prototype.toggleAuthorMarks = function (event) {
        if (!this.author_marks_highlighted) {
            this.showAuthorMarks();
        } else {
            this.hideAuthorMarks();
        }

        // Update current status.
        this.author_marks_highlighted = !this.author_marks_highlighted;

        // Don't actually follow the toggling links.
        if (typeof(event) !== 'undefined') {
            event.preventDefault();
        }
    };

    // Show Author Marks
    // -------------------
    // Force showing of author marks
    // Can be called by `window.AuthorMarks.showAuthorMarks()`
    //
    AuthorMarks.prototype.showAuthorMarks = function () {
        var that = this;
        this.author_marks.forEach(function (mark) {
            mark.className = mark.className + ' ' + that.highlighted_class;
        });

        this.toggle_links.forEach(function (link) {
            link.className = link.className + ' ' + that.highlighted_class;
            link.innerHTML = 'Hide Author Marks';
        });
    };

    // Hide Author Marks
    // -------------------
    // Force hiding of author marks
    // Can be called by `window.AuthorMarks.hideAuthorMarks()`
    //
    AuthorMarks.prototype.hideAuthorMarks = function () {
        var that = this;
        this.author_marks.forEach(function (mark) {
            mark.className = mark.className.replace(new RegExp('\\b' + that.highlighted_class + '\\b'), '');
        });

        this.toggle_links.forEach(function (link) {
            link.className = link.className.replace(new RegExp('\\b' + that.highlighted_class + '\\b'), '');
            link.innerHTML = 'Show Author Marks';
        });
    };

    /* CREATE AND EXPOSE AUTHORMARKS
     * ============================= */
    global.addEvent('load', function() {
        this.AuthorMarks = new AuthorMarks();
    });
})(this);
