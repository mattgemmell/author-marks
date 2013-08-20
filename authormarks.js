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

    /* UTILITY METHODS
     * =============== */
    var _ = {
        // Add Event
        // ---------
        // Cross browser event binding
        //
        addEvent:  function (element, event, callback) {
            if (element.addEventListener) {
                element.addEventListener(event, callback, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, callback);
            }
        },

        // Generic ForEach Method
        // ----------------------
        // Can be attached to the prototype of any object with
        // a `.length` property to provide an `Array.prototype.forEach` like
        // method
        //
        forEach: function (element, callback) {
            for(var i = 0; i < element.length; i++) {
                callback(element[i]);
            }
        }
    };

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

        if (this.author_marks.length > 0) {
            this.init();
        }

        return this;
    }

    // Initialiser
    // -----------
    // Initial event bindings
    //
    AuthorMarks.prototype.init = function () {
        var that = this;
        _.forEach(this.toggle_links, function (toggleLink) {
            if (toggleLink.style.display === '') {
                toggleLink.style.display = 'inline';
            }

            _.addEvent(toggleLink, 'click', function (event) { that.toggleAuthorMarks(event); });
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
        _.forEach(this.author_marks, function (mark) {
            mark.className = mark.className + ' ' + that.highlighted_class;
        });

        _.forEach(this.toggle_links, function (link) {
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
        _.forEach(this.author_marks, function (mark) {
            mark.className = mark.className.replace(new RegExp('\\b' + that.highlighted_class + '\\b'), '');
        });

        _.forEach(this.toggle_links, function (link) {
            link.className = link.className.replace(new RegExp('\\b' + that.highlighted_class + '\\b'), '');
            link.innerHTML = 'Show Author Marks';
        });
    };

    /* CREATE AND EXPOSE AUTHORMARKS
     * ============================= */
    _.addEvent(global, 'load', function() {
        this.AuthorMarks = new AuthorMarks();
    });
})(this);
