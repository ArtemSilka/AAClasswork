class Artwork < ApplicationRecord

    validates :title, presence: true, uniqueness: { scope: :artist_id}
    validates :image_url, presence: true

    has_many :artwork_shares,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :ArtworkShare

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer
end