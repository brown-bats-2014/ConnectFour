class Game < ActiveRecord::Base
  # Remember to create a migration!
  @@current_player = "red"

  def self.addPiece(column)
    player = self.current_turn
    col = "col" + column.to_s
    col.to_sym!
    puts col
    # //row = Game.where("#{col} != ?", 0)
    #row.col0 = player

  end

  def self.current_turn
    @@current_player = "red" if @@current_player = "yellow"
    @@current_player = "yellow" if @@current_palyer = "red"
  end

end
