<?php
/**
 * Created by PhpStorm.
 * User: ltochapn
 * Date: 19/12/2018
 * Time: 09:38.
 */

namespace App\Helper;

class Utility
{
	/**
	 * Get Id group, User, Profiles in the url.
	 *
	 * @param $url
	 *
	 * @return mixed
	 */
	public function truncate($url)
	{
		$pattern = '`(http|https)://[^/]+/[^/]+/[^/]+/[^/]+/[^/]+/[^/]+/([^/]+)`i';
		preg_match($pattern, $url, $matches);

		return $matches;
	}

	/**
	 * Return an array of profiles with the right format for the form builder.
	 *
	 * @param array $initialArray
	 *
	 * @return array
	 */
	public function arrayFormatForSelection($initialArray): array
	{
		$finalArray = [];

		foreach ($initialArray as $item) {
			if (isset($item['name'])) {
				$finalArray[$item['name']] = $item['id'];
			}
		}

		return $finalArray;
	}

	/**
	 * Convert Bytes value to the best unity (Mb, Kb, Gb...).
	 *
	 * @param $bytes
	 *
	 * @return string
	 */
	public function formatSizeUnits($bytes)
	{
		if ($bytes >= 1073741824) {
			$bytes = number_format($bytes / 1073741824, 2) . ' GB';
		} elseif ($bytes >= 1048576) {
			$bytes = number_format($bytes / 1048576, 2) . ' MB';
		} elseif ($bytes >= 1024) {
			$bytes = number_format($bytes / 1024, 2) . ' KB';
		} elseif ($bytes > 1) {
			$bytes = $bytes . ' bytes';
		} elseif (1 == $bytes) {
			$bytes = $bytes . ' byte';
		} else {
			$bytes = '0 bytes';
		}

		return $bytes;
	}
}
