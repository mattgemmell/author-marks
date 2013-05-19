# The authormark Liquid Tag
# Generate <mark> tags for use with Matt Gemmell's authormarks.js
#
# To install, copy this file into your Jekyll/Octopress plugins folder.
# To use: {% mark Here is the point of this argument. %} and your text will automatically
#         be picked up by authormarks.js.
#
# authormarks.js by Matt Gemmell
# authormark.rb  by Parker Moore

class Mark < Liquid::Tag
  def initialize(tag, text, tokens)
    @text = text.strip
  end
  
  def render(context)
    "<mark class=\"author-mark\">#{@text}</mark>"
  end
end

Liquid::Template.register_tag('authormark', AuthorMark)
