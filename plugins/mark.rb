# {% mark %}
# Generate <mark> tags for use with Matt Gemmell's authormarks.js tag
#
# To install, copy this file into your Jekyll/Octopress plugins folder
# To use: {% mark Here is the point of this argument. %} and your text will be compatible
# with authormarks.js

class Mark < Liquid::Tag
  def initialize(tag, text, tokens)
    @text = text
  end

  def render(context)
    "<mark>#{@text}</mark>"
  end
end

Liquid::Template.register_tag('mark', Mark)
