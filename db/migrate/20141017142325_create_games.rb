class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :col0
      t.integer :col1
      t.integer :col2
      t.integer :col3
      t.integer :col4
      t.integer :col5
      t.integer :col6
    end
      6.times do |row|
          Game.create(col0: 0, col1: 0, col2: 0, col3: 0, col4: 0, col5: 0, col6: 0)

    end
  end
end
