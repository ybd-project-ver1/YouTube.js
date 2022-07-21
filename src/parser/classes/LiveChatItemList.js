import Parser from '../index';
import { YTNode } from '../helpers';

class LiveChatItemList extends YTNode {
  static type = 'LiveChatItemList';

  constructor(data) {
    super();
    this.max_items_to_display = data.maxItemsToDisplay;
    this.more_comments_below_button = Parser.parse(data.moreCommentsBelowButton);
  }
}

export default LiveChatItemList;