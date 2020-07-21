json.pokemon do
    json.(@pokemon, :id, :name, :attack, :defense, :poke_type, :moves, :item_ids)
    json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end

json.items do
    @pokemon.items.each do |item|
        json.set! item.id do
            json.(item, :id, :pokemon_id, :happiness, :name, :price)
            json.image_url asset_path("#{item.image_url}")
        end
    end
end

