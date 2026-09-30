// Libs
import { Text, View } from "react-native";

// Styles
import { styles as statesStyles } from "@/styles/base";

// Types
import { IQueryState } from '@/types';

const QueryState = ({
    isLoading,
    loadingText,
    error,
    isEmpty,
    emptyText,
    children
}: IQueryState) => {
    return (
        isLoading ? (
            <View style={statesStyles.stateBox}>
                <Text style={statesStyles.stateText}>{loadingText ?? "Loading..."}</Text>
            </View>
        ) : error ? (
            <View style={statesStyles.errorBox}>
                <Text style={statesStyles.errorText}>Error: {error}</Text>
            </View>
        ) : isEmpty ? (
            <View style={statesStyles.stateBox}>
                <Text style={statesStyles.stateText}>{emptyText ?? "No Data Found"}</Text>
            </View>
        ) : children
    )
}

export default QueryState
