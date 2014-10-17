get '/' do
  erb :index
end

post '/ajax' do
  p params
  Game.addPiece(params[:columnId])
   content_type 'application/json'
  {gameBoard: Game.all}.to_json # column starts from 1
end

