export type User = {
    id: string;
    username: string;
    name: string;
    image?: string;    
}

export type PostType = {
    id: string;
    user: User;
    createdAt: string;
    content: string;
    image?: string;
    numberOfComments?: number;
    numberOfRetweets?: number;
    numberOfLikes?: number;
    impressions?: number;
    isVIP?: boolean;
    isFriend?: boolean; //temporary
}

