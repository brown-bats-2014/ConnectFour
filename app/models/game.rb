class Game < ActiveRecord::Base
  # Remember to create a migration!
  @@current_player = 1

  def self.addPiece(column)
    column = column.to_i - 1
    col = "col" + column.to_s
    col.to_sym
    row = Game.where("#{col} != ?", 0)
    if row.length == 0
      last_row = Game.last
      eval "last_row.#{col} = #{@@current_player}"
      last_row.save
    else
      eval "row.#{col} = #{@@current_player}"
      row.save
    end
    self.switch_player
  end

  def self.switch_player
    @@current_player = 1 if @@current_player = 2
    @@current_player = 2 if @@current_player = 1
  end

  def self.gameOver
    gameboard = Game.all.as_json.to_a
    nested_game = []
    gameboard.each do |col|
      col.delete("id")
      nested_game << col.values
    end
    col_results = evaluateLinear(nested_game)
    if !col_results
      return evaluateLinear(nested_game.transpose)
    else
     return col_results

  end

  def self.evaluateLinear(board)
    board.each do |col|
      counter = 0
      player = nil
      col.delete("id")
      col.values.each do |element|
        if element == 0
          counter = 0
        elsif player == element
          counter +=1
        else
          player = element
          counter = 1
        end
        if counter == 4
          return player
        end
      end
    end
    return false
  end

  def self.reset
    Game.all.each do |row|
      row.col0 = 0;
      row.col1 = 0;
      row.col2 = 0;
      row.col3 = 0;
      row.col4 = 0;
      row.col5 = 0;
      row.col6 = 0;
    end
  end
end
